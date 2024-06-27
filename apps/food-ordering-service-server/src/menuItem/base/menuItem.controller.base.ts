/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MenuItemService } from "../menuItem.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MenuItemCreateInput } from "./MenuItemCreateInput";
import { MenuItem } from "./MenuItem";
import { MenuItemFindManyArgs } from "./MenuItemFindManyArgs";
import { MenuItemWhereUniqueInput } from "./MenuItemWhereUniqueInput";
import { MenuItemUpdateInput } from "./MenuItemUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MenuItemControllerBase {
  constructor(
    protected readonly service: MenuItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MenuItem })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMenuItem(
    @common.Body() data: MenuItemCreateInput
  ): Promise<MenuItem> {
    return await this.service.createMenuItem({
      data: data,
      select: {
        category: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MenuItem] })
  @ApiNestedQuery(MenuItemFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async menuItems(@common.Req() request: Request): Promise<MenuItem[]> {
    const args = plainToClass(MenuItemFindManyArgs, request.query);
    return this.service.menuItems({
      ...args,
      select: {
        category: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async menuItem(
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem | null> {
    const result = await this.service.menuItem({
      where: params,
      select: {
        category: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMenuItem(
    @common.Param() params: MenuItemWhereUniqueInput,
    @common.Body() data: MenuItemUpdateInput
  ): Promise<MenuItem | null> {
    try {
      return await this.service.updateMenuItem({
        where: params,
        data: data,
        select: {
          category: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MenuItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MenuItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMenuItem(
    @common.Param() params: MenuItemWhereUniqueInput
  ): Promise<MenuItem | null> {
    try {
      return await this.service.deleteMenuItem({
        where: params,
        select: {
          category: true,
          createdAt: true,
          description: true,
          id: true,
          name: true,
          price: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
