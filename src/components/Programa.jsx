import '../css/Programa.css'

const actividades = [
  {
    hora: ' 09:00 - 09:30',
    titulo: 'Inauguración',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 09:30 - 10:00',
    titulo: 'Desayuno',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 10:00 - 11:00',
    titulo: 'Charla: IA que se avecina',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 11:00 - 12:00',
    titulo: 'Ponente 1',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 12:00 - 13:00',
    titulo: 'Ponente 2',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 13:00 - 14:00',
    titulo: 'Mesa redonda con empresas',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 14:00 - 14:30',
    titulo: 'Clausura',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 14:30 - 15:30',
    titulo: 'Comida: Vino Español',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  },
  {
    hora: ' 16:00 - 20:00',
    titulo: 'Actividades Santa Tecla',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.'
  }
]

export default function Programa() {
  return (
    <div className="programa-container">
      <h1 className="programa-title">Programa</h1>
      <div className="programa-list">
        {actividades.map((act, idx) => (
          <div className="programa-item" key={idx}>
            <div className="programa-hora">{act.hora}</div>
            <div className="programa-info">
              <div className="programa-titulo">{act.titulo}</div>
              <div className="programa-descripcion">{act.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
