
const Tabs = {
  'active_users': () => (<ActiveUsers />),
  'dashboard': () => (<Dashboard />),
  'badges': () => (<Badges />)
}

const HomeScreen = () => {
  // dashboard is the default active tab
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => setActiveTab(tab);

  return (
    <div>
      <div className="tabs-container">
        {
          [
            { label: 'Dashboard', tab: 'dashboard' },
            { label: 'Active Users', tab: 'active_users' },
            { label: 'Badges', tab: 'badges' }
          ]
          .map(({ label, tab }) => (
            <Button onClick={() => handleTabChange(tab)}>
              {label}
            </Button>
          ))
        }
      </div>
      
      {/* TO RENDER THE ACTIVE TAB */}
      <div>
        {
          // And you can pass parameters if you want
          Tabs[activeTab]
        } 
      </div>
    </div>
  )
}