const ContenedorFlex = ({ array, generar }) => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">{generar(array)}</div>
      </div>
    </>
  );
};

export default ContenedorFlex;
