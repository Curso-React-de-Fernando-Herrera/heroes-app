import AppRouters from 'Routers/AppRouters'
import AuthContext from 'Context/Auth'

function App() {
  return (
    <AuthContext>
      <AppRouters />
    </AuthContext>
  );
}

export default App;
