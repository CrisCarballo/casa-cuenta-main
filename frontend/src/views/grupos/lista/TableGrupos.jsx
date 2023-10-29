import Table from "react-bootstrap/Table";
import GetCuentas from "./GetCuentas";

function TableCuentas() {
  const cuentas = GetCuentas();
  const sumaCuentas = cuentas.reduce(
    (total, cuenta) => parseFloat(total) + parseFloat(cuenta.monto_actual),
    0
  );

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Monto Actual</th>
          <th>Pendiente de Pago</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {cuentas.map((c, index) => (
          <tr key={c.id}>
            <td></td>
            <td>Mi familia</td>
            <td>Gastos familiares por vivir juntos!</td>
            <td>58000</td>
            <td>-5600</td>
            <td>
              <Tooltip placement="top" title="Ver movimientos">
                <Button
                  shape="circle"
                  size="small"
                  icon={<EyeTwoTone twoToneColor="#91B493" />}
                />
              </Tooltip>
              <Tooltip placement="top" title="Editar cuenta">
                <Button
                  shape="circle"
                  size="small"
                  icon={<EditTwoTone twoToneColor="#52c41a" />}
                />
              </Tooltip>
              <Tooltip placement="top" title="Eliminar cuenta">
                <Button
                  shape="circle"
                  size="small"
                  icon={<DeleteTwoTone twoToneColor="#eb2f96" />}
                />
              </Tooltip>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan="3">
            <strong>Total:</strong>
          </td>
          <td>
            <strong>{sumaCuentas}</strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableCuentas;
