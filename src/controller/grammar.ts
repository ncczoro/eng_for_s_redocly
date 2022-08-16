import { Controller, Post, Version, Request, Get } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller()
export class GrammarController {
  @Get('grammar1')
  @ApiOperation({
    summary: 'Be that as it may',
    tags: ['grammar'],
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
}
