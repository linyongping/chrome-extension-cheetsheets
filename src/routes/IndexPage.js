import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";

const cheetSheets = [
  { title: "Javascript", link: "http://overapi.com/javascript#more" },
  { title: "Vim", link: "https://vim.rtorr.com/" },
  { title: "ES2015", link: "https://devhints.io/es6" },
  {
    title: "JSRegex",
    link: "https://www.debuggex.com/cheatsheet/regex/javascript"
  },
  { title: "Flexbox", link: "https://yoksel.github.io/flex-cheatsheet/" },
  { title: "Less", link: "https://devhints.io/less" },
  {
    title: "MarkDown",
    link: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
  }
];

const Link = props => (
  <li>
    <div className="awrapper">
      <a href={props.link}>
        <span className="thin"> {props.title} </span>
      </a>
    </div>
  </li>
);

function IndexPage() {
  return (
    <div>
      <ul>{cheetSheets.map(item => <Link key={item.link} {...item} />)}</ul>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
