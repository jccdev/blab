import { ModelTypes } from "./_model_types";
import { Channel } from "./channel";
import { ClassHelper } from "../helpers/class-helper";

export class ChannelFolder {
  name: string = null;

  channels: Channel[] = [];

  expanded = true;

  type = ModelTypes.ChannelFolder;

  constructor(values: Partial<ChannelFolder> = null) {
    ClassHelper.init(this, values);
  }
}
