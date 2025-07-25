import SelectOption from "../Selector/SelectOption"
import SelectorGroup from "../Selector/SelectorGroup"
import { FaLocationDot } from "react-icons/fa6"

const cidades = [
    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
];

const HeaderFormFilters = () => {
  return (
    <form>
      <SelectorGroup id='cidade' icon={<FaLocationDot />}>
        <SelectOption value="" label="Escolha sua cidade..." />
        {cidades.map((cidade) => {
          return (
            <SelectOption 
              key={cidade.id}
              value={cidade.nome}
              label={cidade.nome}
            />
          );
        })}
      </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters