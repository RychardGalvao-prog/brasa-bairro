export type RestaurantAssetUsage =
  | "atmosfera"
  | "historia-fabio"
  | "bastidor"
  | "cozinha"
  | "balcao"
  | "mesa"
  | "embalagem"
  | "textura";

export type RestaurantAsset = {
  id: string;
  alt: string;
  author: string;
  authorUrl: string;
  unsplashUrl: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  usage: RestaurantAssetUsage;
  attribution: string;
  caption: string;
};

export const counterAsset = {
  id: "balcao-patrick-tomasso",
  alt: "Balcao quente de restaurante com atendente, pratos empilhados e sistema de pedido.",
  author: "Patrick Tomasso",
  authorUrl: "https://unsplash.com/@impatrickt",
  unsplashUrl: "https://unsplash.com/photos/woman-in-black-crew-neck-t-shirt-standing-near-counter-NlcCPeKNmwg",
  imageUrl:
    "https://images.unsplash.com/photo-1556745750-68295fefafc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5Nzc5MjF8MHwxfGFsbHx8fHx8fHx8fDE3ODE1Mzk4Njd8&ixlib=rb-4.1.0&q=80&w=1080",
  imageWidth: 3600,
  imageHeight: 2700,
  usage: "balcao",
  attribution: "Foto: Patrick Tomasso via Unsplash",
  caption: "Balcao, prato e atendimento direto."
} satisfies RestaurantAsset;

export const kitchenAsset = {
  id: "preparo-pylyp-sukhenko",
  alt: "Cozinheiro preparando itens em uma cozinha de restaurante com bancada e pratos ao fundo.",
  author: "Pylyp Sukhenko",
  authorUrl: "https://unsplash.com/@novokayn",
  unsplashUrl: "https://unsplash.com/photos/man-in-white-dress-shirt-holding-white-ceramic-plate-y-XZf_TNRms",
  imageUrl:
    "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5Nzc5MjF8MHwxfGFsbHx8fHx8fHx8fDE3ODE1Mzk4Njd8&ixlib=rb-4.1.0&q=80&w=1080",
  imageWidth: 5468,
  imageHeight: 3076,
  usage: "bastidor",
  attribution: "Foto: Pylyp Sukhenko via Unsplash",
  caption: "Cada pedido entra com origem, item e observacao."
} satisfies RestaurantAsset;

export const grillAsset = {
  id: "brasa-emerson-vieira",
  alt: "Carne sendo preparada na brasa com fogo e fumaca em close.",
  author: "Emerson Vieira",
  authorUrl: "https://unsplash.com/@emersonvieira",
  unsplashUrl: "https://unsplash.com/photos/close-up-photo-of-person-grilling-meat-Mq1LDuswX2o",
  imageUrl:
    "https://images.unsplash.com/photo-1558030154-d3605e91d892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5Nzc5MjF8MHwxfGFsbHx8fHx8fHx8fDE3ODE1Mzk4Njh8&ixlib=rb-4.1.0&q=80&w=1080",
  imageWidth: 5332,
  imageHeight: 3000,
  usage: "textura",
  attribution: "Foto: Emerson Vieira via Unsplash",
  caption: "Apoio editorial de brasa; o prato heroi continua em grafismo."
} satisfies RestaurantAsset;

export const restaurantAssets = [counterAsset, kitchenAsset, grillAsset] as const satisfies readonly RestaurantAsset[];

export const restaurantMedia = {
  counter: counterAsset,
  kitchen: kitchenAsset,
  grill: grillAsset
} as const;

export const restaurantAssetsNotice =
  "Imagens externas sao ilustrativas. Elas apoiam atmosfera e textura, sem substituir a direcao artistica do Brasa & Bairro.";
