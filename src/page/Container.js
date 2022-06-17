import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Ingredient from '../assets/img/ingredient.png'
import Result from '../assets/img/result.png'
import LeftHbtn from "../assets/img/lefthbtn.png";
import ItemList1 from "../component/Item1";
import ItemList2 from "../component/Item2";
import Weapon from "../assets/img/Weapon.png";
import Catalysts from "../assets/img/Catalysts.png";
import Gems from "../assets/img/Gems.png";
import Materials from "../assets/img/Materials.png";
import Weaspons from "../assets/img/Weaspons.png";
import CircularProgress from '@mui/material/CircularProgress';
import Arrow from "../assets/img/arrow.png";
import Shield from "../assets/img/shield.png";
import Spear from "../assets/img/spear.png";
import Sward from "../assets/img/sward.png";
import Iron from "../assets/img/iron.png";
import Tool1 from "../assets/img/tool1.png";
import Tool2 from "../assets/img/tool2.png";
import Tool3 from "../assets/img/tool3.png";


function Container() {
  const [selectpage, setSelectpage] = useState(0);
  const [tabimage1, setTabimg1] = useState("./img/clickrightbtn1.png");
  const [tabimage2, setTabimg2] = useState("./img/rightbtn2.png");
  const [progress, setProgress] = useState(true);
  const recipe = () => { 
    setSelectpage(1);
    setTabimg1("./img/clickrightbtn1.png");
    setTabimg2("./img/rightbtn2.png");
  }
  const crafting = () => { 
    setSelectpage(0);
    setTabimg2("./img/clickrightbtn2.png");
    setTabimg1("./img/rightbtn1.png");
  }
  setTimeout(() => { 
    setProgress(false);
  }, 2000)

  return (
    <Box sx={{ flexGrow: 1 }} className="body-container">
      <Grid container spacing={4} columns={18}>
        <Grid item xs={18} sm={18} md={7.5} lg={7.5} className="body-left">
          <img src={LeftHbtn} className="body-mark-img" />
          <div className="left-content">
            {progress ? <Box><CircularProgress /></Box> : 
              <>
                <div className="item-list">
                  <img src={Weapon} />
                  &nbsp;&nbsp;
                  <span>Weaspon Casts</span>
                </div>
                <Grid container spacing={2} columns={5} className="box-list">
                  {itemlist1.map((item, index) => {
                    return <ItemList1 data={item} key={index} />;
                  })}
                </Grid>
                <br />
                <div className="item-list">
                  <img src={Catalysts} />
                  &nbsp;&nbsp;
                  <span>Catalysts</span>
                </div>
                <Grid container spacing={2} columns={5} className="box-list">
                  {itemlist2.map((item, index) => {
                    return <ItemList1 data={item} key={index} />;
                  })}
                </Grid>
                <br />
                <div className="item-list">
                  <img src={Materials} />
                  &nbsp;&nbsp;
                  <span>Materials</span>
                </div>
                <Grid container spacing={2} columns={5} className="box-list">
                  {itemlist3.map((item, index) => {
                    return <ItemList1 data={item} key={index} />;
                  })}
                </Grid>
                <br />
                <div className="item-list">
                  <img src={Gems} />
                  &nbsp;&nbsp;
                  <span>Gems</span>
                </div>
                <Grid container spacing={2} columns={5} className="box-list">
                  {itemlist4.map((item, index) => {
                    return <ItemList1 data={item} key={index} />;
                  })}
                </Grid>
                <br />
                <div className="item-list">
                  <img src={Weaspons} />
                  &nbsp;&nbsp;
                  <span>Weaspons</span>
                </div>
                <Grid container spacing={2} columns={5} className="box-list receipt">
                  {itemlist5.map((item, index) => {
                    return <ItemList2 data={item} key={index} />;
                  })}
                </Grid>
              </>
            }
          </div>
        </Grid>
        <Grid item xs={18} sm={18} md={10.5} lg={10.5} className="body-right">
          <div className="right-btns">
            <img src={tabimage2} onClick={crafting}  />
            <img src={tabimage1} onClick={recipe}/>
          </div>
            {
              selectpage === 0 ?
              <Grid container spacing={2} className="right-content2">
                <Grid container spacing={2} columns={6} className="item-list">
                  <h3>Required&nbsp;Materials</h3>
                  <Grid item xs={3} sm={1} md={2} lg={1}>
                    <div className="item-box"></div>
                  </Grid>
                  <Grid item xs={3} sm={1} md={2} lg={1}>
                    <div className="item-box"></div>
                  </Grid>
                  <Grid item xs={3} sm={1} md={2} lg={1}>
                    <div className="item-box"></div>
                  </Grid>
                  <Grid item xs={3} sm={1} md={2} lg={1}>
                    <div className="item-box"></div>
                  </Grid>
                  <Grid item xs={3} sm={1} md={2} lg={1}>
                    <div className="item-box"></div>
                  </Grid>
                  <Grid item xs={3} sm={1} md={2} lg={1}>
                    <div className="item-box"></div>
                  </Grid>  
                </Grid>
                <div className="levels">
                  <div className="level-item">
                    <h2>Lv1</h2>
                    <h2>Lv2</h2>
                    <h2>Lv3</h2>
                    <h2>Lv4</h2>
                  </div>
                  <img src={Sward} />
                  <img src={Shield} />
                  <img src={Iron} />
                  <img src={Arrow} />
                  <img src={Spear} />
                </div>
              </Grid>
              :
              <Grid container spacing={2} columns={16} className="right-content1">
                <Grid item xs={16} sm={16} md={8} lg={8} className="ingredient-parent">
                  <Grid container spacing={3} columns={6} className="ingredient">
                    <img src={Ingredient} className="ing-mark-img" />
                    <Grid item xs={3} sm={2} md={6} lg={3}>
                      <div className="item-box">
                        <div className="item-icon">
                          <img src={Tool1} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2} md={6} lg={3}>
                      <div className="item-box">
                        <div className="item-icon">
                          <img src={Tool2} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2} md={6} lg={3}>
                      <div className="item-box">
                        <div className="item-icon-1">
                          <img src={Tool3} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2} md={6} lg={3}>
                      <div className="item-box">
                        <div className="item-icon-1">
                          <img src={Tool3} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2} md={6} lg={3}>
                      <div className="item-box">
                        <div className="item-icon-1">
                          <img src={Tool3} />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2} md={6} lg={3}>
                      <div className="item-box">
                        <div className="item-icon-1">
                          <img src={Tool3} />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={16} sm={16} md={8} lg={8} className="result-parent">
                  <Grid container spacing={3} columns={4} className="result">
                    <img src={Result} className="result-title-img" />
                    <div className="card-title">
                      <h2>Roman Sword Of Mars Lv 4</h2>
                      <h4>ATK + 4 (Sellable On Market!)</h4>
                    </div>
                    <div className="item-box"></div>
                    <button className="craft-btn"></button>
                  </Grid>
                </Grid>
              </Grid>
            }
        </Grid>
      </Grid>
    </Box>
  );
}
const itemlist1 = [
  {
    number: 1,
    name: "Basic Sword Cast",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/BasicSwordCast.png",
    count: 3,
  },
  {
    number: 2,
    name: "Basic Shield Cast",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/BasicShieldCast.png",
    count: 4,
  },
  {
    number: 3,
    name: "Basic Bludeon Cast",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/BasicBludeonCast.png",
    count: 10,
  },
  {
    number: 4,
    name: "Basic Staff Cast",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/BasicStaffCast.png",
    count: 10,
  },
  {
    number: 5,
    name: "Basic Long Range Cast",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/BasicLongRangeCast.png",
    count: 6,
  },
];
const itemlist2 = [
  {
    number: 6,
    name: "Roman Catalyst",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanCatalyst.png",
    count: 10,
  },
  {
    number: 7,
    name: "Viking Catalyst",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingCatalyst.png",
    count: 3,
  },
  {
    number: 8,
    name: "Mayan Catalyst",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanCatalyst.png",
    count: 3,
  },
];
const itemlist3 = [
  {
    number: 9,
    name: "Wood",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/Wood.png",
    count: 3,
  },
  {
    number: 10,
    name: "Iron",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/Iron.png",
    count: 4,
  },
  {
    number: 11,
    name: "Stone",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/Stone.png",
    count: 10,
  },
  {
    number: 12,
    name: "Bronze",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/Bronze.png",
    count: 5,
  },
  {
    number: 13,
    name: "Silver",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/Silver.png",
    count: 2,
  },
  {
    number: 14,
    name: "Gold",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/Gold.png",
    count: 1,
  },
  {
    number: 15,
    name: "Diamond",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/Diamond.png",
    count: 7,
  },
];
const itemlist4 = [
  {
    number: 16,
    name: "Spirit Gem",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/SpiritGem.png",
    count: 3,
  },
  {
    number: 17,
    name: "Wind Gem",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/WindGem.png",
    count: 9,
  },
  {
    number: 18,
    name: "Fire Gem",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/FireGem.png",
    count: 2,
  },
  {
    number: 19,
    name: "Light Gem",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/LightGem.png",
    count: 9,
  },
  {
    number: 20,
    name: "Earth Gem",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/EarthGem.png",
    count: 2,
  },
  {
    number: 21,
    name: "Galactic Gem",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/GalacticGem.png",
    count: 4,
  },
  {
    number: 22,
    name: "Ice Gem",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/IceGem.png",
    count: 6,
  },
];
const itemlist5 = [
  {
    number: 23,
    name: "Roman Gladius Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanGladiusLv1.png",
    count: 9,
  },
  {
    number: 24,
    name: "Roman Gladius Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanGladiusLv2.png",
    count: 5,
  },
  {
    number: 25,
    name: "Roman Gladius Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanGladiusLv3.png",
    count: 4,
  },
  {
    number: 26,
    name: "Mayan Tecpatl Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanTecpatlLv1.png",
    count: 2,
  },
  {
    number: 27,
    name: "Mayan Tecpatl Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanTecpatlLv2.png",
    count: 7,
  },
  {
    number: 28,
    name: "Mayan Tecpatl Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanTecpatlLv3.png",
    count: 5,
  },
  {
    number: 29,
    name: "Viking Sverd Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSverdLv1.png",
    count: 7,
  },
  {
    number: 30,
    name: "Viking Sverd Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSverdLv2.png",
    count: 1,
  },
  {
    number: 31,
    name: "Viking Sverd Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSverdLv3.png",
    count: 1,
  },
  {
    number: 32,
    name: "Mayan Chimalli Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanChimalliLv1.png",
    count: 9,
  },
  {
    number: 33,
    name: "Mayan Chimalli Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanChimalliLv2.png",
    count: 5,
  },
  {
    number: 34,
    name: "Mayan Chimalli Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanChimalliLv3.png",
    count: 8,
  },
  {
    number: 35,
    name: "Roman Scrutum Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanScrutumLv1.png",
    count: 2,
  },
  {
    number: 36,
    name: "Roman Scrutum Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanScrutumLv2.png",
    count: 1,
  },
  {
    number: 37,
    name: "Roman Scrutum Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanScrutumLv3.png",
    count: 9,
  },
  {
    number: 38,
    name: "Viking Skelduz Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSkelduzLv1.png",
    count: 3,
  },
  {
    number: 39,
    name: "Viking Skelduz Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSkelduzLv2.png",
    count: 5,
  },
  {
    number: 40,
    name: "Viking Skelduz Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSkelduzLv3.png",
    count: 4,
  },
  {
    number: 41,
    name: "Mayan Tepoztli Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanTepoztliLv1.png",
    count: 2,
  },
  {
    number: 42,
    name: "Mayan Tepoztli Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanTepoztliLv2.png",
    count: 10,
  },
  {
    number: 43,
    name: "Mayan Tepoztli Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanTepoztliLv3.png",
    count: 7,
  },
  {
    number: 44,
    name: "Roman Flail Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanFlailLv1.png",
    count: 3,
  },
  {
    number: 45,
    name: "Roman Flail Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanFlailLv2.png",
    count: 8,
  },
  {
    number: 46,
    name: "Roman Flail Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanFlailLv3.png",
    count: 10,
  },
  {
    number: 47,
    name: "Viking Skeggox Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSkeggoxLv1.png",
    count: 2,
  },
  {
    number: 48,
    name: "Viking Skeggox Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSkeggoxLv2.png",
    count: 8,
  },
  {
    number: 49,
    name: "Viking Skeggox Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingSkeggoxLv3.png",
    count: 6,
  },
  {
    number: 50,
    name: "Roman Pilum Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanPilumLv1.png",
    count: 5,
  },
  {
    number: 51,
    name: "Roman Pilum Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanPilumLv2.png",
    count: 3,
  },
  {
    number: 52,
    name: "Roman Pilum Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanPilumLv3.png",
    count: 7,
  },
  {
    number: 53,
    name: "Mayan Atlatl Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanAtlatlLv1.png",
    count: 8,
  },
  {
    number: 54,
    name: "Mayan Atlatl Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanAtlatlLv2.png",
    count: 2,
  },
  {
    number: 55,
    name: "Mayan Atlatl Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanAtlatlLv3.png",
    count: 10,
  },
  {
    number: 56,
    name: "Viking Atgeir Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingAtgeirLv1.png",
    count: 10,
  },
  {
    number: 57,
    name: "Viking Atgeir Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingAtgeirLv2.png",
    count: 8,
  },
  {
    number: 58,
    name: "Viking Atgeir Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingAtgeirLv3.png",
    count: 10,
  },
  {
    number: 59,
    name: "Mayan Blow Dart Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanBlowDartLv1.png",
    count: 4,
  },
  {
    number: 60,
    name: "Mayan Blow Dart Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanBlowDartLv2.png",
    count: 5,
  },
  {
    number: 61,
    name: "Mayan Blow Dart Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/MayanBlowDartLv3.png",
    count: 6,
  },
  {
    number: 62,
    name: "Viking Bogi Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingBogiLv1.png",
    count: 6,
  },
  {
    number: 63,
    name: "Viking Bogi Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingBogiLv2.png",
    count: 4,
  },
  {
    number: 64,
    name: "Viking Bogi Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/VikingBogiLv3.png",
    count: 10,
  },
  {
    number: 65,
    name: "Roman Crossbow Lv 1",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanCrossbowLv1.png",
    count: 4,
  },
  {
    number: 66,
    name: "Roman Crossbow Lv 2",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanCrossbowLv2.png",
    count: 10,
  },
  {
    number: 67,
    name: "Roman Crossbow Lv 3",
    tokenAddress: "L52hege1q4qTLrFBfBpphEoVAWwQbapdEPVnJjc5gbh",
    token_update_auth: "HE53BkXg7GNnLpTpuqKC5paMXkpHpZD2PrbHT3SP3aj2",
    Burn_return_wallet: "2fFWPwM6mebG67MDrcawTCfef5qgKp7Uug26eHkfWGPX",
    img_url: "./resources/RomanCrossbowLv3.png",
    count: 2,
  },
];
export default Container;