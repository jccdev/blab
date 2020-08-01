import { ClassHelper } from '../helpers/class-helper';
import { ModelTypes } from './_model_types';

export class Channel {
  id: string;
  name: string;
  type = ModelTypes.Channel;
  constructor(values: Partial<Channel> = null) {
    ClassHelper.init(this, values);
  }
}


