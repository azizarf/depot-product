import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import List from './components/List.jsx'
import axios from 'axios'
import Oneproduct from './components/OneProduct.jsx'
import Navbar from './components/Navbar.jsx'
import CreateProduct from './components/CreateProduct.jsx'
import Updateproduct from './components/Updateproduct.jsx'
import Login from './components/Login.jsx'



const App = () => {
  const [items, setItems] = useState([])
  const[update,setUpdate]=useState(!update)
  const [current, setCurrent] = useState([])
  const [categorie, setCategorie] = useState([])
  const [toUpdate, setToUpdate] = useState(0)
  const [indexToUpdate, setIndexToUpdate] = useState(0)
  const [view, setView] = useState('login')
  const [user, setUser] = useState([])

  const fetch = () => {
    axios.get("/api/product/all")
      .then((res) => {
        setItems(res.data)
        setCurrent(res.data)
      })
      .catch((error) => console.log(error))

    axios.get("/api/categorie/all")
      .then((res) => {
        setCategorie(res.data)
      })
      .catch((err) => {
        throw err
      })

    axios.get("/api/user/all")
      .then((res) => {
        console.log(res.data);
        setUser(res.data)
      })
      .catch((err) => {
        throw err
      })
  }

  const handleCreate = (newProduct) => {
    axios.post("/api/product/cre", newProduct)
      .then((res) => {
        fetch()
      })
      .catch((err) => {
        throw err
      })
    changeView('list')
  }

  const getCategorieName = (id) => {
    let name = ''
    categorie.forEach((e) => {
      if (e.id === id) {
        name = e.name
      }
    })
    return name
  }

  const filterByCategorie = (name) => {
    let filtered = items.filter((e) => {
      return e.categoryId === name
    })
    setCurrent(filtered)
  }

  const getUpdate = (newView, id, index) => {
    changeView(newView)
    setToUpdate(id)
    setIndexToUpdate(index)
  }
  const handleSearch = async (name) => {
    console.log(name);

    try {
      const response = await axios.get(`api/product/${name}`)
      console.log(response.data);
      setCurrent(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = (newUpdate, id) => {
    axios.put(`/api/product/${id}`, newUpdate)
      .then(() => {
        fetch()
      })
      .catch((err) => {
        throw err
      })

    changeView('list')
  }


  const handleDelete = (id) => {
    axios.delete(`/api/product/${id}`)
      .then(() => {
        fetch()
      })
      .catch((err) => {
        throw err
      })
  }

  const handleLogin = (name, pass) => {
    console.log(name);
    console.log(pass);
    user.forEach((e) => {
      if (name === e.name && pass === e.password) {
        changeView('list')
      }
    })
  }


  useEffect(() => {
    fetch()
  }, [update])

  const changeView = (newView) => {
    setView(newView)
  }

  const renderView = () => {
    if (view === "list") {
      return (
        <div>
          <Navbar  update={update} setUpdate={setUpdate }handleSearch={handleSearch} changeView={changeView} />
          <List items={current} getUpdate={getUpdate} handleDelete={handleDelete} />
        </div>
      )
    }
    else if (view === "update") {
      return <Updateproduct toUpdate={items[indexToUpdate]} handleUpdate={handleUpdate} />
    }
    else if (view === "create") {
      return <CreateProduct handleCreate={handleCreate} />
    }
    else if (view === "login") {
      return <Login handleLogin={handleLogin} />
    }
  }


  return (
    <div>
      {renderView()}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
