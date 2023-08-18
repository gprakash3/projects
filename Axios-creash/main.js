//AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'



// GET REQUEST
function getTodos() {
    console.log('GET Request');
    // axios({
    //     method: 'get',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     // To limit the output 5 instead of 200
    //     params: {
    //         _limit: 5
    //     }
    // })
    // .then(res => showOutput(res))      //will execute function on success.
    // .catch(err => console.log(err));    //if fail then return error

    // To sort above long code
    axios
    .get('https://jsonplaceholder.typicode.com/todos?_limit=5', { timeout:5000 }) //timeout: maxtime it take to execute otherwise it stop
    .then(res => showOutput(res))
    .catch(err => console.log(err));
  }
  
  // POST REQUEST
  function addTodo() {
    console.log('POST Request');
    //To post data
    // axios({
    //     method: 'post',
    //     url: 'https://jsonplaceholder.typicode.com/todos',
    //     // To limit the output 5 instead of 200
    //     data: {
    //         title: 'New Todo',
    //         completed : false
    //     }
    // })
    // .then(res => showOutput(res))      //will execute function on success.
    // .catch(err => console.log(err));    //if fail then return error

    // To sort above long code
    axios
    .post('https://jsonplaceholder.typicode.com/todos', { 
        title: 'New Todo',
        completed : false
        })
    .then(res => showOutput(res))
    .catch(err => console.log(err));
  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    console.log('PUT/PATCH Request');
    
    //put: replace whole resource
    //patch: replace data which we specify
    axios  
    .patch('https://jsonplaceholder.typicode.com/todos/1 ', {    //here /1 is ID
        title: 'updated TODO',
        completed : true
        })
    .then(res => showOutput(res))
    .catch(err => console.log(err));

    
  }
  
  // DELETE REQUEST
  function removeTodo() {
    console.log('DELETE Request');
    //to delete todo 
    axios  
    .delete('https://jsonplaceholder.typicode.com/todos/1 ')        //here /1 is ID
    .then(res => showOutput(res))
    .catch(err => console.log(err));
  }
  
  // SIMULTANEOUS DATA
  function getData() {
    console.log('Simultaneous Request');
    //To get more than one request simultaneously
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
    //here we can only print one result as we have written code.
    //other method to show data is console log   (18:00 in video)
    .then(axios.spread((todo,posts) => showOutput(posts)))
    .catch(err => console.log(err));
  }
  
  //INTERCEPTING REQUEST AND RESPONSES
  //To run intercept request and run some functionality like logger
  axios.interceptors.request.use(
    config => {
        console.log(` ${config.method.toUpperCase()} request sent to ${config.url}
        at ${new Date().getTime()}`);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
  );




  // CUSTOM HEADERS          : watch again to understand 24:00
  function customHeaders() {
    
    console.log('Custom Headers');

    
        const config = {
            headers: {
                'content-type' : 'application/json',
                Authorization : 'sometoken'
            }
        };
    

    axios
    .post('https://jsonplaceholder.typicode.com/todos', { 
        title: 'New Todo',
        completed : false
        }, config)
    .then(res => showOutput(res))
    .catch(err => console.log(err));

  }
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    console.log('Transform Response');

    const options= {
        method: 'post',
        url : 'https://jsonplaceholder.typicode.com/todos',
        data: {
            title: 'Hello world'
        },
        transformResponse: axios.defaults.transformResponse.concat(data => {
            data.title = data.title.toUpperCase();
            return data;
        })
    };

    axios(options).then(res => showOutput(res));
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios
    .get('https://jsonplaceholder.typicode.com/todoss', {   //added 's' to make link wrong
        // validateStatus: function(status) {
        //     return status<500; //reject only if status is greater or equal to 500
        // }
    }) 
    .then(res => showOutput(res))
    .catch(err =>{
        if(err.response) {
            //server respond with status other than 200 range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);

            if(err.response.status === 404) {
                alert('Error: page not found');
            }
            else if(err.request) {
                console.log(err.request);
            }
            else{
                console.log(err.message);
            }

        }
    });


  }
  
  // CANCEL TOKEN
  function cancelToken() {
   const source =  axios.CancelToken.source();
    
    axios
    .get('https://jsonplaceholder.typicode.com/todos' , {
        cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
        if(axios.isCancel(thrown)){
            console.log('Request canceled' , thrown.message);
        }
    });
    if(true){
        source.cancel('Request canceled');
    }

  }
  

  
  // AXIOS INSTANCES
  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  axiosInstance.get('/comments').then(res => showOutput(res));



  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);
