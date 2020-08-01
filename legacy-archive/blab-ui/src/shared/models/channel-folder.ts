import { ClassHelper } from '@/shared/helpers/class-helper';
import { Channel } from '@/shared/models/channel';
import { ModelTypes } from './_model_types';

export class ChannelFolder {
  name: string;
  channels: Channel[] = [];
  expanded = true;
  type = ModelTypes.ChannelFolder;
  constructor(values: Partial<ChannelFolder> = null) {
    ClassHelper.init(this, values);
  }
}
