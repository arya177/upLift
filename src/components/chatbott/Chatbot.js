import React, { useState, useEffect } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}


const Chatbot = (props) => {
  
  let [searchvalue, setSearchvalue] = useState(null);
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  function search(value) {

    // Fetch the data from model
    fetch('http://localhost:5000/autocorrect', {
      //  mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
          input: value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res) => {
      // res.json();
      console.log(res);
    })  
    .catch((err) => {
      console.log(err.message);
    });

    
    // console.log("Value is (inside function): " + value)
    // setSearchvalue("value")

    // useEffect(() => {
    //   //Runs on every render
    //   setSearchvalue("value")
    // });

    // console.log("New searchvalue (inside function): ", searchvalue);

  }

  // useEffect(() => {
  //   //Runs on every render
  //   setSearchvalue("value")
  // });

  //   useEffect(() => {
  //     // action on update of movies
  //     setSearchvalue(searchvalue)
  //     console.log("Inside useEffect: ",searchvalue)
      
  //     //Fetch the data from model
  //     // fetch('http://localhost:5000/autocorrect', {
  //     //   //  mode: 'no-cors',
  //     //    method: 'POST',
  //     //    body: JSON.stringify({
  //     //       input: searchvalue
  //     //    }),
  //     //    headers: {
  //     //       'Content-type': 'application/json; charset=UTF-8',
  //     //    },
  //     // })
  //     // .then((res) => {
  //     //   // res.json();
  //     //   console.log(res);
  //     // })
  //     // .catch((err) => {
  //     //   console.log(err.message);
  //     // });


  // }, [searchvalue]);


  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          // speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your  name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'rmcbot',
            },
            {
              id: 'rmcbot',
              message:
                'Hi, {previousValue}. What products/services do you require?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              user: true,
              validator: (value) => {
                  // console.log(value);
                  // console.log(typeof(value))
                  // setSearchvalue(value);
                  // console.log("Inside Validator: "+searchvalue);
                  // search(value);
                  setSearchvalue(value);

                  search(value)
                  
                  // while(searchvalue==="Initial Value"){
                    
                  // }

                  // value = searchvalue
                  // console.log("Inside validator: "+ value)
                  // console.log("Inside validator: "+ searchvalue)
                  return true
              },
              trigger: '3',
            },
            {
              id: '3',
              message:
                'Above are the links for the required products/services',
              trigger: 'end-message',
            },
            {
              id: 'end-message',
              // component: <Post />,
              // asMessage: true,
              message:'Good to see you',
              end: true,
            },
            // {
            //   id: 'resp',

            //   component: {
                
            //   }
            //   // component: (
            //   //   <>
                
            //   //   <p>previousValue</p>
            //   //   {/* string prev = "saf" */}
            //   //   </>
            //   // )

            //   // message: '{previousValue}',
            // },
            
            // {
            //   id: '4',
            //   message:
            //     'A property tax or millage rate is an ad valorem tax on the value of a property.',
            //   trigger: 'qtype',
            // },
            // {
            //   id: '5',
            //   message:
            //     'An election is a way people can choose their candidate or their preferences in a representative democracy or other form of government',
            //   trigger: 'qtype',
            // },
            // {
            //   id: '6',
            //   component: <Link />,
            //   trigger: 'q-submit',
            // },
            // {
            //   id: 'q-submit',
            //   message: 'Do you have any other questions !?',
            //   trigger: 'submit',
            // },
            // {
            //   id: 'submit',
            //   options: [
            //     { value: 'y', label: 'Yes', trigger: 'no-submit' },
            //     { value: 'n', label: 'No', trigger: 'end-message' },
            //   ],
            // },
            // {
            //   id: 'no-submit',
            //   options: [
            //     { value: 1, label: 'Property Tax ?', trigger: '4' },
            //     { value: 2, label: ' Professional Tax ?', trigger: '3' },
            //     { value: 3, label: 'Election Department', trigger: '5' },
            //     { value: 4, label: 'More Information', trigger: '6' },
            //   ],
            // },
            
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
