import { InjectionToken } from "@angular/core";
import { ConstantModel } from "../models/constant.model";

export const constantsService = new InjectionToken<ConstantModel>('token');