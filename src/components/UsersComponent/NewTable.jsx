
import React, { Component } from 'react';
// import { render } from 'react-dom';
import ReactTable from  "react-table-6";
// import "react-table/react-table.css";
import "react-table-6/react-table.css" 


const data = [{"id":2,"email":"ddymocke1@freewebs.com","company":"Jacobson LLC","username":"Diahann Dymocke","date":"2020-10-12 08:55:19","status":"Active","phone":"1955178056"},
{"id":3,"email":"tbennetts2@zdnet.com","company":"Wuckert-Beatty","username":"Timmi Bennetts","date":"2020-09-10 13:01:14","status":"Inactive","phone":"3749611663"},
{"id":4,"email":"jbanasevich3@hexun.com","company":"Tromp LLC","username":"Josefina Banasevich","date":"2020-04-10 21:46:32","status":"Pending","phone":"9465326676"},
{"id":5,"email":"rcason4@youtube.com","company":"Nitzsche Inc","username":"Rollo Cason","date":"2020-10-05 17:22:18","status":"Inactive","phone":"7776067843"},
{"id":6,"email":"fkippen5@who.int","company":"Considine, Price and Muller","username":"Fraser Kippen","date":"2020-09-05 15:09:34","status":"Pending","phone":"2575957502"},
{"id":7,"email":"wbrunning6@google.com.hk","company":"Schmidt, Maggio and Murray","username":"Wilden Brunning","date":"2020-04-07 16:22:07","status":"Pending","phone":"1373899612"},
{"id":8,"email":"scroxon7@feedburner.com","company":"Paucek, Daniel and Schmitt","username":"Staford Croxon","date":"2020-11-09 22:39:35","status":"Active","phone":"5849924484"},
{"id":9,"email":"etolossi8@spotify.com","company":"Kulas, Jerde and Satterfield","username":"Eugenie Tolossi","date":"2020-09-09 10:25:15","status":"Inactive","phone":"6689238950"},
{"id":10,"email":"cingliby9@mysql.com","company":"Hilll Group","username":"Christian Ingliby","date":"2020-02-07 10:42:29","status":"Inactive","phone":"3855001694"},
{"id":11,"email":"dknapmana@phpbb.com","company":"Labadie-Murazik","username":"Donny Knapman","date":"2020-03-15 06:55:55","status":"Inactive","phone":"3036815211"},
{"id":12,"email":"mdysterb@foxnews.com","company":"Wolff, Tillman and Wunsch","username":"Matty Dyster","date":"2020-01-04 17:13:06","status":"Blacklisted","phone":"1493550041"},
{"id":13,"email":"mmunkleyc@youtube.com","company":"Fisher-Quitzon","username":"Marie-jeanne Munkley","date":"2020-07-22 17:59:13","status":"Blacklisted","phone":"5384214896"},
{"id":14,"email":"btattersalld@baidu.com","company":"Nienow-Bernier","username":"Betty Tattersall","date":"2020-08-01 12:44:41","status":"Active","phone":"9229545915"},
{"id":15,"email":"gboormane@nyu.edu","company":"Zboncak, Satterfield and Wehner","username":"Grace Boorman","date":"2020-05-25 21:22:17","status":"Inactive","phone":"7491664804"},
{"id":16,"email":"iwallbuttonf@altervista.org","company":"Anderson-Howell","username":"Idalina Wallbutton","date":"2020-09-10 22:04:22","status":"Blacklisted","phone":"5109274161"},
{"id":17,"email":"tvoffg@aol.com","company":"MacGyver-Frami","username":"Timi Voff","date":"2020-01-13 07:21:24","status":"Pending","phone":"7148557682"},
{"id":18,"email":"kcorserh@themeforest.net","company":"Kling Inc","username":"Katy Corser","date":"2020-06-11 22:58:02","status":"Blacklisted","phone":"1483521288"},
{"id":19,"email":"psiggsi@wikia.com","company":"Eichmann-Parker","username":"Padriac Siggs","date":"2020-02-19 08:09:17","status":"Pending","phone":"5489021274"},
{"id":20,"email":"fgreatbachj@usnews.com","company":"Beer, Halvorson and Waelchi","username":"Fleming Greatbach","date":"2020-08-25 03:45:12","status":"Pending","phone":"7263180155"},
{"id":21,"email":"vbodyk@sogou.com","company":"Hermiston, Tromp and Fritsch","username":"Virginie Body","date":"2020-07-04 08:45:33","status":"Pending","phone":"7573099707"},
    ]

    const columns = [{
      Header: 'Task Name',
      accessor: 'email'
    }, {
      Header: 'Status',
      accessor: 'status',
      Cell: row => {
        row.styles['color'] = '#fff';
        row.styles['backgroundColor'] = row.value.toLowerCase() == 'pending' ? 'red' : 'green';
        return row.value.toUpperCase();
      }
    }];

const NewTable = () => {

    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
        className="-striped -highlight"
      />
    );
  }

export default NewTable