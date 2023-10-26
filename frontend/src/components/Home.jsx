import '../css/Home.css'
import NavBar from './NavBar'
import NavWorkersPreview from './NavWorkersPreview'

function Home() {
  return (
    <>
      <NavBar />
      <NavWorkersPreview 
        favoriteWorkers={[
          {
              id: 1,
              name: "Juan Perez",
              occupation: "Carpintero",
              location: "Miraflores",
              keyProfilePicture: "freddy",
          },
          {
              id: 2,
              name: "Juan Perez",
              occupation: "Carpintero",
              location: "Miraflores",
              keyProfilePicture: "marcos",
          },
          {
              id: 3,
              name: "Juan Perez",
              occupation: "Carpintero",
              location: "Miraflores",
              keyProfilePicture: "thiago",
          }
        ]}

        historyWorkers={[
          {
              id: 1,
              name: "Juan Perez",
              occupation: "Carpintero",
              location: "Miraflores",
              keyProfilePicture: "freddy",
          },
          {
              id: 2,
              name: "Juan Perez",
              occupation: "Carpintero",
              location: "Miraflores",
              keyProfilePicture: "marcos",
          },
          {
              id: 3,
              name: "Juan Perez",
              occupation: "Carpintero",
              location: "Miraflores",
              keyProfilePicture: "thiago",
          }
        ]}
      />
    </>
  )
}

export default Home
