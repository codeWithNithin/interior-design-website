import './clientbrand.css';

const brandList = [
  {
    imgPath: '/01.svg',
  },
  {
    imgPath: '/02.svg',
  },
  {
    imgPath: '/03.svg',
  },
  {
    imgPath: '/04.svg',
  },
  {
    imgPath: '/05.svg',
  },
];

function ClientBrand() {
  return (
    <div className="brand-container">
      {brandList.map((brand) => (
        <div className="img">
          <img src={brand.imgPath} alt="client brand" />
        </div>
      ))}
    </div>
  );
}

export default ClientBrand;
