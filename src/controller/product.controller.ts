import { Controller, Post, Version, Request, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { OpenApiInputDto, OpenApiOutputDto } from '../dto/open-api.dto';

@Controller()
export class ProductController {

  @Post('__')
  @ApiOperation({
    summary: 'create product api',
    tags: ['product'],
    servers: [
      {
        url: 'https://dev-newopenapi.hdinsurance.com.vn/v2/open-api',
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
  getProduct(@Request() req): Promise<any> {
    return null;
  }

  @Post('_')
  @ApiOperation({
    summary: 'get product api',
    tags: ['product'],
    servers: [
      {
        url: 'https://dev-newopenapi.hdinsurance.com.vn/v2/open-api',
        description: 'Beta server URL',
      },
    ],
  })
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
            p_in2: '',
          },
          signature:
            'FF72881207D10381EE8DD2AC8EBAB790040F809388E0BBF73BED0E674D59E2B2',
        },
      },
    },
  })
  @ApiBearerAuth()
  crateP(): any {
    return null;
  }
}
