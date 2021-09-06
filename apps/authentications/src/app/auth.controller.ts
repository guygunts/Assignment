/*
 * Copyright (c) 2021, Castcle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 * 
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 3 only, as
 * published by the Free Software Foundation.
 * 
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License
 * version 3 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 * 
 * You should have received a copy of the GNU General Public License version
 * 3 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 * 
 * Please contact Castcle, 22 Phet Kasem 47/2 Alley, Bang Khae, Bangkok, 
 * Thailand 10160, or visit www.castcle.com if you need additional information 
 * or have any questions.
 */

import { Controller, Get,UseGuards,Request,ForbiddenException  } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalAuthGuard } from './local-auth.guard'
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get('auth/token')
  async login(@Request() req) {
    return this.authService.token();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/metadata/hashtags')
  async getProfile(@Request() req) {  
    var language = req.headers["accept-language"]
  if (!language) {
    throw new ForbiddenException();
  }
  var Version = req.headers["accept-version"]
  if (!Version) {
    throw new ForbiddenException();
  }
    let data=await this.authService.findOne();
    return data
  }
}
