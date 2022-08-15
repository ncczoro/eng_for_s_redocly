import { Controller, Get, Post, Version, Request } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AppService } from './app.service';
import {
  LoginInputDto,
  OpenApiInputDto,
  OpenApiOutputDto,
} from './dto/open-api.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Version('2')
  @Post('open-api')
  @ApiOperation({
    summary: 'open api',
    tags: ['open_api'],
    servers: [
      {
        url: 'https://dev-newopenapi.hdinsurance.com.vn',
        description: 'Beta server URL',
      },
    ],
  })
  @ApiBearerAuth()
  @ApiBody({
    type: OpenApiInputDto,
    description: 'Open api Post Body',
    examples: {
      a: {
        summary: 'post body',
        description: '',
        value: {
          actionCode: 'portal01',
          data: {
            p_in1: 'eg',
            p_in2: '{"DESCRIPTION":"Mo ta 1","AGE":35,"EFF_DATE":"10/01/2025"}',
          },
          signature:
            'FF72881207D10381EE8DD2AC8EBAB790040F809388E0BBF73BED0E674D59E2B2',
        },
      },
    },
  })
  @ApiResponse({
    type: OpenApiOutputDto,
    status: 201,
    description: 'Thành công',
    content: {
      data: {
        example: {
          success: true,
          statusCode: 201,
          data: {},
          timestamp: '2:15:33 PM 8/10/2022',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'accessToken sai hoặc hết hạn',
    content: {
      data: {
        example: {
          statusCode: 401,
          message: 'Unauthorized',
        },
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. Service báo lỗi',
    content: {
      data: {
        example: {
          success: false,
          statusCode: 403,
          error: 'Error: actionCode or data or signature is missing',
          logId: '5a84a8bf-c2de-46ff-86d9-59b2994f3dfb',
          timestamp: '9:46:19 AM 8/12/2022',
        },
      },
    },
  })
  exeProcedureUseOracledb(@Request() req): Promise<any> {
    return null;
  }
}
