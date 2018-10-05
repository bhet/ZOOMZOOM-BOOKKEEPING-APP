import React from 'react';

const Main = () => {

  return (
    <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Info</h3>
                </div>

                <ul className="list-unstyled components">
                    <p>List</p>
                      <li>
                          <a href="#">Portfolio</a>
                      </li>
                      <li>
                          <a href="#">Contact</a>
                      </li>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a href="#">Home 1</a></li>
                            <li><a href="#">Home 2</a></li>
                            <li><a href="#">Home 3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="#">Page 1</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </li>

                </ul>
            </nav>

        </div>
  )

}

export default Main
