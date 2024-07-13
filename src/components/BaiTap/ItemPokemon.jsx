import React from "react";

const ItemPokemon = ({ pokemon }) => {
  //   console.log(props);
  return (
    <div className="shadow-xl gap-3 px-5">
      <img
        src={
          pokemon
            ? pokemon.image
            : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
        }
        alt=""
      />
      {/* Nếu như pokemon có dữ liệu (khác undefine  hoặc null thì lúc đó mới render tạo ra 4 thẻ h3 thẻ p và button) */}

      {pokemon && (
        <>
          <h3>{pokemon?.name}</h3>
          <p>Tấn công: {pokemon?.attack}</p>
          <p>Phòng thủ: {pokemon?.defense}</p>
          <button>Xem chi tiết</button>
        </>
      )}
    </div>
  );
};

export default ItemPokemon;
