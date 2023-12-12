import { Container, Button } from 'react-bootstrap'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext.js'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../http/userAPI.js'

const Admin = () => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    const handleLogout = (event) => {
        logout()
        user.logout()
        navigate('/login', {replace: true})
    }

    return (
        <Container>
            <h1>Панель управления</h1>
            <p>
                Это панель управления магазином для администратора
            </p>
            <ul>
                <li><Link to="/admin/orders"><Button class="btn-dark">Заказы в магазине</Button></Link></li>
                <li><Link to="/admin/categories"><Button class="btn-dark">Категории каталога</Button></Link></li>
                <li><Link to="/admin/brands"><Button class="btn-dark">Бренды каталога</Button></Link></li>
                <li><Link to="/admin/products"><Button class="btn-dark">Товары каталога</Button></Link></li>
            </ul>
            <Button onClick={handleLogout}>Выйти</Button>
        </Container>
    )
}

export default Admin