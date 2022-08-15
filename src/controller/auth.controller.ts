import { Controller, Post, Version, Request, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginInputDto } from '../dto/open-api.dto';

@Controller()
export class AuthController {

  @Version('1')
  @Post('auth/login')
  @ApiOperation({
    summary: 'Login',
    tags: ['open_api_auth'],
    description: 'Đối tác đăng nhập vào hệ thống của HDI',
    servers: [
      {
        url: 'https://dev-newopenapi.hdinsurance.com.vn',
        description: 'Beta server URL',
      },
    ],
  })
  @ApiBody({
    type: LoginInputDto,
    description: 'Api Login post Body',
    examples: {
      a: {
        summary: 'Login Body',
        description: '',
        value: {
          username: 'hdi_partner1',
          password: 'E5532971CA8421EBE053019997FE332',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Đăng nhập thành công, api trả về accessToken, refreshToken',
    schema: {
      type: 'Json Object',
      example: {
        data: {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJIRElfREFUQV9QT1JUQUwiLCJwYXJ0bmVyX2NvbmZpZ19pZCI6MjIsImlhdCI6MTY2MDI2OTEzMSwiZXhwIjoxNjYwMjcwMDMxfQ.S_p41HEsUaxk_u2vbY1r5vxD4FyNl9XLAiCCruE8SfM',
          refreshToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJIRElfREFUQV9QT1JUQUwiLCJwYXJ0bmVyX2NvbmZpZ19pZCI6MjIsImlhdCI6MTY2MDI2OTEzMSwiZXhwIjoxNjYwODczOTMxfQ.lXLRTmHa-tzccQCEL5FPZvuY6BaUGy6XL-He5dA75i8',
        },
        success: true,
        statusCode: 201,
        timestamp: '1:52:11 AM 8/12/2022',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Sai username hoặc password',
    schema: {
      type: 'Json Object',
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  login(@Request() req): any {
    return null;
  }

  @Version('1')
  @Get('auth/refresh')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Refresh token',
    tags: ['open_api_auth'],
    description: 'Khi token hết hạn, dùng refreshToken để nhận token mới',
    servers: [
      {
        url: 'https://dev-newopenapi.hdinsurance.com.vn',
        description: 'Beta server URL',
      },
    ],
  })
  @ApiResponse({
    status: 200,
    description: 'Thành công, api trả về accessToken, refreshToken mới',
    schema: {
      type: 'Json Object',
      example: {
        data: {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVyX2NvZGUiOiJIRElfREFUQV9QT1JUQUwiLCJwYXJ0bmVyX2NvbmZpZ19pZCI6MjIsImlhdCI6MTY2MDI2OTEzMSwiZXhwIjoxNjYwMjcwMDMxfQ.S_p41HEsUaxk_u2vbY1r5vxD4FyNl9XLAiCCruE8SfM',
        },
        success: true,
        statusCode: 201,
        timestamp: '1:52:11 AM 8/12/2022',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'refreshToken sai hoặc hết hạn',
    schema: {
      type: 'Json Object',
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  async refreshTokens(@Request() req): Promise<any> {
    return null;
  }
}
