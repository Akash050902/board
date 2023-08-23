import React from 'react'
import { useNavigate } from "react-router";
import { useState } from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import dashicon from '../Media/dashboard_icon.png'
import transaction from '../Media/transaction_icon.png'
import schedule from '../Media/schedule_icon.png'
import userimg from '../Media/user_icon.png'
import settings from '../Media/setting_icon.png'
import search from '../Media/Search icon.png'
import bell from '../Media/bell_icon.svg'
import revenue from '../Media/revenue.svg'
import trans from '../Media/total_transactions_icon.svg'
import like from '../Media/like.svg'
import users from '../Media/users.svg'
import normie from "../Media/normie.png"
import './Dashboard.css'
import CurrencyGraph from './CurrencyGraph';
import Piechart from './PieChart';

const Dashboard = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    console.log(user);
    if(user.photoURL===null){
        user.photoURL=normie;
    }
    const handleLogout = async () => {
    try {
        await logOut();
        navigate("/");
    }catch (error) {
        console.log(error.message);
    }
    }
    if(user.photoURL===null){
        user.photoURL=normie;
    }
    const [open, setOpen] = useState(false);
    const Cta = ["Logout"];
    var [a,b,c] = useState();
    const apiURL =
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';
      fetch(apiURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((data) => {
          const inr = data.eur.inr;
          const usd = data.eur.usd;
          const esp = data.eur.esp;
          a= inr;
          b= usd;
          c= esp;
          console.log(a);
          console.log(b);
          console.log(c);
        })
        .catch((error) => {
          console.error(error);
        });

  return (
    <div className='dashcontainer'>
        <div className='left-col'>
            <div className='logo'>
                <h1>Board.</h1>
            </div>
            <div className='list'>
                <ul className='option'>
                    <img src={dashicon} alt='dashboard'/>
                    <p>Dashboard</p>
                </ul>
                <ul className='option'>
                    <img src={transaction} alt='dashboard'/>
                    <p>Transactions</p>
                </ul>
                <ul className='option'>
                    <img src = {schedule} alt='dashboard'/>
                    <p>Schedules</p>
                </ul>
                <ul className='option'>
                    <img src = {userimg} alt='dashboard'/>
                    <p>Users</p>
                </ul>
                <ul className='option'>
                    <img src = {settings} alt='dashboard'/>
                    <p>Settings</p>
                </ul>
            </div>
            <div className='help'>
                <ul className='line'>
                    <p>Help</p>
                </ul>
                <ul className='line'>
                    <p>Contact Us</p>
                </ul>
            </div>
        </div>
        <div className='right-col'>
            <div className='navigator'>
                <div className='topic'>
                    <h4>Dashboard</h4>
                </div>
                <div className='lists'>
                    <ul className='navi'>
                        <div className='search'>
                        <input id='search' type='character' placeholder='search...' />
                        <button type='submit' className='searchicon'><img src={search} /></button>
                        </div>
                    </ul>
                    <ul className='navi'>
                        <div className='bell'>
                            <img src={bell} /></div>
                    </ul>
                    <ul className='navi'>
                        <div className='userprofile'>

                            <img
                            onClick={() => setOpen(!open)} 
                            src={user.photoURL} alt="dp" referrerPolicy="no-referrer" />
                        </div>
                        {
                            open &&(
                            <div className='dropdown'>
                                <ul>
                                    {
                                        Cta.map((e) =>(
                                        <li key = {e} onClick={handleLogout}>{e}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
            <div className='cards'>
                <div className='card'>
                    <div className='card-1'>
                    <div className='wrap'>
                    <p>Total Revenues</p>
                    <img src={revenue} />
                    </div>
                    $2,129,430
                    </div>
                </div>
                <div className='card'>
                    <div className='card-2'>
                    <div className='wrap'>
                    <p>Total Transactions</p>
                    <img src={trans} />
                    </div>
                        <div className='currency'>
                            1,520
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-3'>
                    <div className='wrap'>
                    <p>Total Likes</p>
                    <img src={like} />
                    </div>
                    9,721
                    </div>
                </div>
                <div className='card'>
                    <div className='card-4'>
                    <div className='wrap'>
                    <p>Total Users</p>
                    <img src={users} />
                    </div>
                    892
                    </div>
                </div>
            </div>
            <div className='linegraph'>
                <div className='line'>
                    <CurrencyGraph />
                </div>
                <div className='pie'>
                    <Piechart />
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Dashboard;