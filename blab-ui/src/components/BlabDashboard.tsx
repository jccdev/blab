import React from "react";
import { NavLink } from "react-router-dom";
import { Channel } from "../shared/models/channel";
import { ChannelFolder } from "../shared/models/channel-folder";

const channelDetails = [
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
];

const renderChannels = () => {
  return channelDetails.map((item, ix) => {
    if (item instanceof Channel) {
      return (
        <li className="nav-item" key={ix}>
          <NavLink to="/channel" className="nav-link" activeClassName="active">
            <i className="fas fa-hashtag" />
            {item.name}
          </NavLink>
        </li>
      );
    }
    if (item instanceof ChannelFolder) {
      return (
        <li className="nav-item" key={ix}>
          <NavLink to="/channel" className="nav-link" activeClassName="active">
            {item.expanded ? (
              <i className="fas fa-caret-right" />
            ) : (
              <i className="fas fa-caret-down" />
            )}
            {item.name}
          </NavLink>
          <ul className="nav flex-column" v-if="item.expanded">
            {item.channels.map((innerChannel, ix) => {
              return (
                <li className="nav-item" key={ix}>
                  <NavLink
                    to="/channel"
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className="fas fa-hashtag" />
                    {innerChannel.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </li>
      );
    }
    throw new Error(`Unhandled Component Type: ${item}`);
  });
};

function BlabDashboard(): JSX.Element {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <NavLink to="/home" className="navbar-brand col-sm-3 col-md-2 mr-0">
          Blab
        </NavLink>
        <input
          className="form-control form-control-dark w-100"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <button type="button" className="btn btn-link nav-link">
              Sign out
            </button>
          </li>
        </ul>
      </nav>

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                {renderChannels()}
                {/* <template v-for="(item, i) in channels">
                  
                </template> */}
                <li className="nav-item">
                  <NavLink
                    to="/home"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link"
                    activeClassName="active"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <main
            role="main"
            className="col-md-9 ml-sm-auto col-lg-10 px-4"
          ></main>
        </div>
      </div>
    </div>
  );
}

export default BlabDashboard;
