import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import { useLocation, useNavigate  } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { SIDEBAR_TEXT_FIX, countryLogoDictionary } from "../database/data"

const ReactSidebar = ({SIDEBAR}) => {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/');
  const operator = location[1];
  const sport = location[2];

  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          > 
            <h2>{sport.charAt(0).toUpperCase() + sport.slice(1).replace('%20', ' ')}</h2>
          </MenuItem>
          {SIDEBAR[operator][sport] && Object.keys(SIDEBAR[operator][sport]).map((country) => {
            return (
              <SubMenu key={uuidv4()} label={SIDEBAR_TEXT_FIX[country]?SIDEBAR_TEXT_FIX[country]: country } icon={<img src={`/flags/${countryLogoDictionary[country]}.svg`} width="20" height="20" alt='flag'/>}>
                  {(SIDEBAR[operator][sport][country] && SIDEBAR[operator][sport][country] && SIDEBAR[operator][sport][country].map) && SIDEBAR[operator][sport][country].map((league) =>
                  <MenuItem key={uuidv4()} onClick={() => navigate(`/${operator}/${sport}/${country}/${league}`)} icon={<img src={`/logos/${league.replace(' ', '').toLowerCase()}.png`} width="20" height="20" alt='flag'/>}>
                    {SIDEBAR_TEXT_FIX[league] ? SIDEBAR_TEXT_FIX[league] : league}
                  </MenuItem>
                )}
              </SubMenu>
            )
          })}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default ReactSidebar;