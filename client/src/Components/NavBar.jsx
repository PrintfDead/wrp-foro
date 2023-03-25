import React, {useContext} from 'react';
import AuthContext from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../Css/style.css';

export default function MenuAppBar() {
  const history = useNavigate();
  const {user, handleLogout} = useContext(AuthContext);
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  const logout = () => {
    handleClose();
    handleLogout();
  }

  const handleMenu = () => {
    const menuJs = document.getElementById("menujs")
	//const menuIcon = document.getElementById("menuIcon");

	if (menuJs.style.width === "2rem") {
		menuJs.style.width = "34rem"
	} else {
		menuJs.style.width = "2rem"
	}
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectPCU = () => {
    handleClose();
    history("/pcu/home");
  }

  const handleLogin = () => {
    handleClose();
    history("/auth/login");
  }

  return (
    <main>
      <header className="headBackground">
        <div className="image"><img src="" alt=""/></div>
    	</header>

    	<nav className="container">
			<div className="containerMovil">

				<div className="menuContainer w-2" id="menujs">

					<div className="menuMovil">
						<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
							id="menuIcon" onClick={handleMenu}>
							<path
								d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
								fill="currentColor" />
							<path
								d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
								fill="currentColor" />
							<path
								d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
								fill="currentColor" />
						</svg>
					</div>


					<div className="listMovil">

						<a href="#" className="itemsMovil" active>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M17 9H7V7H17V9Z" fill="currentColor" />
								<path d="M7 13H17V11H7V13Z" fill="currentColor" />
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
									fill="currentColor" />
							</svg> Foros
						</a>


						<a href="#" className="itemsMovil">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg" id="svg">
								<path d="M13 7H7V5H13V7Z" fill="currentColor" />
								<path d="M13 11H7V9H13V11Z" fill="currentColor" />
								<path d="M7 15H13V13H7V15Z" fill="currentColor" />
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z"
									fill="currentColor" />
							</svg> PCU</a>


						<a href="#" className="itemsMovil">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M7 4.05444C4.23858 4.05444 2 6.29302 2 9.05444C2 11.8159 4.23858 14.0544 7 14.0544C9.76142 14.0544 12 11.8159 12 9.05444C12 6.29302 9.76142 4.05444 7 4.05444ZM5 9.05444C5 10.159 5.89543 11.0544 7 11.0544C8.10457 11.0544 9 10.159 9 9.05444C9 7.94987 8.10457 7.05444 7 7.05444C5.89543 7.05444 5 7.94987 5 9.05444Z"
									fill="currentColor" />
								<path d="M22 10.5544H17V7.55444H22V10.5544Z" fill="currentColor" />
								<path
									d="M11.5503 16.9457C12.6786 16.9457 13.6977 16.4786 14.4249 15.7272C14.4097 15.7429 14.3943 15.7585 14.3788 15.774L16.5001 17.8954C15.2334 19.1621 13.4834 19.9457 11.5503 19.9457C9.61734 19.9457 7.86734 19.1622 6.60059 17.8954L8.72191 15.7741C9.44576 16.498 10.4458 16.9457 11.5503 16.9457Z"
									fill="currentColor" />
							</svg>
							Staff</a>


						<a href="#" className="itemsMovil">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M13 7H7V5H13V7Z" fill="currentColor" />
								<path d="M13 11H7V9H13V11Z" fill="currentColor" />
								<path d="M7 15H13V13H7V15Z" fill="currentColor" />
								<path fill-rule="evenodd" clip-rule="evenodd"
									d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z"
									fill="currentColor" />
							</svg>
							Normativas</a>

					</div>
				</div>
			</div>

			<div className="nav">
				<div className="list">
					<a href="" className="itemsList" id="active"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M17 9H7V7H17V9Z" fill="currentColor" />
							<path d="M7 13H17V11H7V13Z" fill="currentColor" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M2 18V2H22V18H16V22H14C11.7909 22 10 20.2091 10 18H2ZM12 16V18C12 19.1046 12.8954 20 14 20V16H20V4H4V16H12Z"
								fill="currentColor" />
						</svg> Foros
					</a>


					<a href="" className="itemsList none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
							xmlns="http://www.w3.org/2000/svg" id="svg">
							<path d="M13 7H7V5H13V7Z" fill="currentColor" />
							<path d="M13 11H7V9H13V11Z" fill="currentColor" />
							<path d="M7 15H13V13H7V15Z" fill="currentColor" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z" fill="currentColor" />
						</svg> PCU</a>


					<a href="" className="itemsList none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M7 4.05444C4.23858 4.05444 2 6.29302 2 9.05444C2 11.8159 4.23858 14.0544 7 14.0544C9.76142 14.0544 12 11.8159 12 9.05444C12 6.29302 9.76142 4.05444 7 4.05444ZM5 9.05444C5 10.159 5.89543 11.0544 7 11.0544C8.10457 11.0544 9 10.159 9 9.05444C9 7.94987 8.10457 7.05444 7 7.05444C5.89543 7.05444 5 7.94987 5 9.05444Z"
								fill="currentColor" />
							<path d="M22 10.5544H17V7.55444H22V10.5544Z" fill="currentColor" />
							<path
								d="M11.5503 16.9457C12.6786 16.9457 13.6977 16.4786 14.4249 15.7272C14.4097 15.7429 14.3943 15.7585 14.3788 15.774L16.5001 17.8954C15.2334 19.1621 13.4834 19.9457 11.5503 19.9457C9.61734 19.9457 7.86734 19.1622 6.60059 17.8954L8.72191 15.7741C9.44576 16.498 10.4458 16.9457 11.5503 16.9457Z"
								fill="currentColor" />
						</svg>
						Staff</a>


					<a href="" className="itemsList none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M13 7H7V5H13V7Z" fill="currentColor" />
							<path d="M13 11H7V9H13V11Z" fill="currentColor" />
							<path d="M7 15H13V13H7V15Z" fill="currentColor" />
							<path fill-rule="evenodd" clip-rule="evenodd"
								d="M3 19V1H17V5H21V23H7V19H3ZM15 17V3H5V17H15ZM17 7V19H9V21H19V7H17Z" fill="currentColor" />
						</svg>
						Normativas</a>
				</div>

				<div className="containerProfile">
					<div className="userimage"><img src="" alt=""/></div>
					/*<div className="options username">username</div>*/
					<div className="options login">login</div>
				</div>
        	</div>
		</nav>
    </main>
    /*<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Washington
          </Typography>
          {user ? 
          (
            <div>
              <IconButton
                onClick={handleMenu}
                color="inherit"
              >
                {user.Nombre}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={redirectPCU}>PCU</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )
          
          : 
          (
            <div>
              <IconButton
                onClick={handleLogin}
                color="inherit"
              >
                Login
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>*/
  );
}
