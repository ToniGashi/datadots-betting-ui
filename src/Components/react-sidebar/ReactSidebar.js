import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import { useLocation, useNavigate  } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { SIDEBAR, SIDEBAR_TEXT_FIX, SIDEBAR_ICONS } from "../database/data"



function ReactSidebar() {
  const { collapseSidebar } = useProSidebar();
  const navigate = useNavigate();
  const [_, operator, sport, league] = useLocation().pathname.split('/');

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
            <h2>{SIDEBAR_ICONS.mainIcons[sport] ? SIDEBAR_ICONS.mainIcons[sport] : ''}{sport.charAt(0).toUpperCase() + sport.slice(1)}</h2>
          </MenuItem>
          {SIDEBAR[sport] && Object.keys(SIDEBAR[sport]).map((leagueZone) => {
            return (
              <SubMenu key={uuidv4()} icon={(SIDEBAR_ICONS && SIDEBAR_ICONS.icons && SIDEBAR_ICONS.icons[leagueZone]) ?SIDEBAR_ICONS.icons[leagueZone] : ''} label={SIDEBAR_TEXT_FIX[leagueZone]}>
                {(SIDEBAR[sport] && SIDEBAR[sport][leagueZone] && SIDEBAR[sport][leagueZone].map) && SIDEBAR[sport][leagueZone].map((league) =>
                  <MenuItem key={uuidv4()} onClick={() => navigate(`/${operator}/${sport}/${league}`)}>
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