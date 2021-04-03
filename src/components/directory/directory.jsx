import React from "react";

import { connect } from "react-redux";

import "./directory.scss";

import MenuItem from "../menu-item/menu-item";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => {
      return <MenuItem key={id} {...otherSectionsProps} />;
    })}
  </div>
);

const mapStateToProps = ({ section: { sections } }) => ({
  sections,
});

export default connect(mapStateToProps)(Directory);
