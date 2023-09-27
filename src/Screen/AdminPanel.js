import React, { useState } from 'react';
import { fbAdd } from '../Config/firebaseMethod';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function AdminPanel() {
  const [mainarr, setMainarr] = useState({});
  const [array, setArray] = useState([]);
  const [val, setVal] = useState('');
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const navigate = useNavigate();

  const Arr = () => {
    setArray([...array, val]);
    setVal('');
    console.log(array);
  };

  const saveList = () => {
    setMainarr({ question: first, options: array, correctAns: second });
    console.log(mainarr);
    setArray([]);
    setFirst('');
    setSecond('');
  };

  const addTask = () => {
    fbAdd('QuizQuestions', mainarr)
      .then((res) => {
        console.log(res);
        setMainarr({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let move = () => {
    navigate(`/quizscreen`);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-zinc-400 p-5">
            <div className="d-flex flex-column">
              <h1 className="bg-slate-100 w-150 h-150 rounded-full ml-60 my-20"></h1>
              <Button variant='contained' onClick={move} className="btn btn-primary m-1">
                HTML
              </Button>
              <Button variant='contained' onClick={move} className="btn btn-primary m-1">
                CSS
              </Button>
              <Button variant='contained' onClick={move} className="btn btn-primary m-1">
                JS Quiz 1
              </Button>
              <Button variant='contained' onClick={move} className="btn btn-primary m-1">
                JS Quiz 2
              </Button>
              <div className="text-center my-2 mt-100">
                <Button variant='contained' className="btn btn-primary m-1">Layout</Button>
              </div>
            </div>
          </div>
          <div className="col-md-9 ml-30 mt-10">
            <div className="d-flex my-3">
              <h1 className="w-50 text-2xl font-serif">QUIZ APP ADMIN</h1>
              <div className="w-50 text-right">
                <button onClick={addTask} className="btn btn-primary">
                  SAVE
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 bg-zinc-200 mr-2 mb-4 p-1.5">Quiz Name</div>
              <div className="col-md-4 bg-zinc-200 mr-2 mb-4 p-1.5">Quiz Duration in min</div>
              <div className="col-md-4 bg-zinc-200 mr-2 mb-4 p-1.5">Secret key</div>
              <div className="col-md-4 bg-zinc-200 mr-2 mb-4 p-1.5">Quiz Open</div>
              <div className="col-md-8 bg-zinc-200 col-span-2 mr-2 mb-4 p-1.5">Description</div>
              <div className="col-md-12 mb-4 mt-2">
                <button onClick={saveList} className="btn btn-primary">
                  Lock Quiz
                </button>
              </div>
              <div className="col-md-12 bg-zinc-400 col-span-3 mr-2 mb-4 p-1.5">
                <input
                  type="text"
                  onChange={(e) => setFirst(e.target.value)}
                  value={first}
                  className="form-control"
                  placeholder="Question"
                />
              </div>
              <div className="col-md-8 bg-zinc-400 col-span-2 mr-2 mb-4 p-1.5">
                <input
                  type="text"
                  onChange={(e) => setVal(e.target.value)}
                  value={val}
                  className="form-control"
                  placeholder="Option"
                />
              </div>
              <div className="col-md-4 mr-2 text-right">
                <button onClick={Arr} className="btn btn-primary">
                  +
                </button>
              </div>
              {array.map((x, index) => (
                <div key={index} className="col-md-4 bg-zinc-200 col-span-1 mr-2 mb-4 p-1.5">
                  {x}
                </div>
              ))}
              <div className="col-md-8 bg-zinc-200 mr-2 mb-4 p-1.5">
                <input
                  type="text"
                  onChange={(e) => setSecond(e.target.value)}
                  value={second}
                  className="form-control"
                  placeholder="Correct: Option 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
