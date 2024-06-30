import "./Wrapper.css";

const Wrapper = () => {
  return (
    <>
      <div className="wrapper">
        <div className="page-content">
          <div className="page-container pnl">
            {/* Inputs Collapsed */}
            <div className="inputs-collapsed">
              <div className="date">
                <span>2024-06-01</span> — <span>2024-06-28</span>
              </div>
              <div className="filters">
                <span className="filter-category">Equity</span>
                <span className="filter-category">Combined</span>
                {/* Additional filters */}
              </div>
            </div>

            {/* Input Heatmap Section */}
            <div class="grey-back-mobile">&nbsp;</div>
            <div className="section input-heatmap-section mobile-input-container hidden">
              <div>
                <span className="hide-mobile-input">
                  <span className="icon icon-arrow-left"></span>
                </span>
                <h2 className="text-center">Search and filter</h2>
              </div>
              <form>
                <div className="inputcontainer row">
                  <div className="two columns su-input-group su-static-label">
                    <label className="su-input-label">Segment</label>
                    <select>
                      <option value="" disabled>
                        Select segment
                      </option>
                      <option value="EQ">Equity</option>
                      <option value="FO">Futures & Options</option>
                      <option value="CDS">Currency</option>
                      <option value="COM">Commodity</option>
                      <option value="MF">Mutual funds</option>
                    </select>
                  </div>
                  {/* Additional inputs */}
                </div>
                {/* Buttons and controls */}
              </form>
              {/* Heatmap section */}
            </div>

            {/* Text Center Section */}
            <div class="section mobile-agg">
              <div>
                <div class="row main-agg">
                  <div class="six columns">
                    <label>Realised P&amp;L</label>{" "}
                    <h1 class="neg">
                      <span class="inherit">+ 213.5k</span>
                    </h1>
                  </div>{" "}
                  <div class="six columns">
                    <label>Unrealised P&amp;L</label>{" "}
                    <h1>
                      <span class="inherit">0</span>
                    </h1>
                  </div>
                </div>{" "}
                <div class="sub-agg">
                  <div class="row">
                    <div class="six columns">
                      <label>Charges &amp; taxes</label>
                    </div>{" "}
                    <div class="six columns text-right">
                      <p>26.3k</p>
                    </div>
                  </div>{" "}
                  <div class="row">
                    <div class="eight columns">
                      <label>Other credits &amp; debits</label>
                      <p>0</p>
                    </div>{" "}
                    <div class="four columns text-right">
                      <p></p>
                    </div>
                  </div>{" "}
                  <div class="row">
                    <div class="six columns">
                      <label>Net realised P&amp;L</label>
                    </div>{" "}
                    <div class="six columns text-right">
                      <p class="negu">
                        <span class="inherit">+ 187.2k</span>
                      </p>
                    </div>
                  </div>{" "}
                  <div class="row">
                    <a href="#">
                      View charges breakdown{" "}
                      <span class="icon icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
