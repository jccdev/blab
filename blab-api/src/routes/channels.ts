import { ChannelFolder } from '../shared/models/channel-folder';
import { Channel } from '../shared/models/channel';
import express from 'express';

const baseRoute = "/channels"

const router = express.Router();

router.get(`${baseRoute}/`, (req, res) => {

  const test = [
    new Channel({ name: "welcome" }),
    new ChannelFolder({
      name: "general",
      channels: [
        new Channel({ name: "general" }),
        new Channel({ name: "current-events" }),
        new Channel({ name: "meetups" }),
      ],
    }),
    new ChannelFolder({
      name: "entertainment",
      channels: [
        new Channel({ name: "games" }),
        new Channel({ name: "music" }),
        new Channel({ name: "movies-and-tv" }),
      ],
    }),
  ]

  res.send(test); 
});

export default router;