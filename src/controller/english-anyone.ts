import { Controller, Request, Get } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller()
export class EnglishAnyOneController {

  @Get('Be that as it may')
  @ApiOperation({
    summary: 'Be that as it may',
    tags: ['phrase'],
    description: 'even though, cu cho la co the',
  })
  @ApiBody({
    description: 'english phrase',
    examples: {
      a: {
        value: `be that as it may, I'm still running today`,
      },
    },
  })
  t1(@Request() req): Promise<any> {
    return null;
  }

  @Get('Make a distinction between')
  @ApiOperation({
    summary: 'Make a distinction between',
    tags: ['phrase'],
    description: 'to recognize a difference between two things',
  })
  @ApiBody({
    description: 'english phrase',
    examples: {
      a: {
        value: `I dont make a distinction between Chiwowoa and a small dog`,
      },
    },
  })
  t2(@Request() req): Promise<any> {
    return null;
  }
}
