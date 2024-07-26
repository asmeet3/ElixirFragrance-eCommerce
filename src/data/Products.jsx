import black from "../assets/products/black.webp";
import white from "../assets/products/white.webp";
import yellow from "../assets/products/yellow.webp";
import blackAndWhite from "../assets/products/blackAndWhite.webp";
import blue from "../assets/products/blue.webp";
import blueberry from "../assets/products/blueberry.webp";
import brown from "../assets/products/brown.webp";
import chamomile from "../assets/products/chamomile.webp";
import coral from "../assets/products/coral.webp";
import ginseng from "../assets/products/ginseng.webp";
import indigo from "../assets/products/indigo.webp";
import limegreen from "../assets/products/limegreen.webp";
import magenta from "../assets/products/magenta.webp";
import neem from "../assets/products/neem.webp";
import orange from "../assets/products/orange.webp";
import puerh from "../assets/products/puerh.webp";
import red from "../assets/products/red.webp";
import turquoise from "../assets/products/turquoise.webp";

const Products = [
  { 
    id: 1, 
    brandName: "ELIXIR", 
    image: turquoise, 
    name: "Turquoise Essence", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "turquoise-essence", 
    desc: "Tropical Oasis: Escape to a turquoise paradise with this vibrant fragrance. Imagine butterfly pea flowers dancing in sunlight, their essence creating a mesmerizing aroma that shifts with the addition of zesty lime. This refreshing scent is a cooling blend of mint and tropical fruits, transporting your senses to a serene beach getaway." 
  },
  { 
    id: 2, 
    brandName: "ELIXIR", 
    image: red, 
    name: "Crimson Elixir", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "crimson-elixir", 
    desc: "Naturally Sweet Sunshine: Bask in the warmth of this luxurious fragrance. A smooth, slightly nutty scent reminiscent of rooibos, it features hints of honey and vanilla. Picture cozy evenings by the fireplace, enveloped in this comforting ruby-red aroma that can be enjoyed day or night." 
  },
  { 
    id: 3, 
    brandName: "ELIXIR", 
    image: orange, 
    name: "Citrus Burst", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "citrus-burst", 
    desc: "Sunshine in Every Spray: Start your day with a burst of invigorating citrus. This fragrance captures the essence of fresh orange peel, uplifting your mood and brightening your spirit with every spritz." 
  },
  { 
    id: 4, 
    brandName: "ELIXIR", 
    image: blackAndWhite, 
    name: "Dual Harmony", 
    price: "$129", 
    category: "Fragrance", 
    size: "50ml", 
    featured: true, 
    slug: "dual-harmony", 
    desc: "Harmony in Every Spray: Discover the perfect balance with this exquisite blend of bold and delicate notes. The deep richness of dark florals meets the light elegance of white petals, creating a captivating fragrance that dances on the skin." 
  },
  { 
    id: 5, 
    brandName: "ELIXIR", 
    image: ginseng, 
    name: "Ginseng Vitality", 
    price: "$129", 
    category: "Fragrance", 
    size: "50ml", 
    featured: true, 
    slug: "ginseng-vitality", 
    desc: "Awaken Your Energy: Embrace the revitalizing spirit of ginseng in this earthy fragrance. With its slightly bitter notes and invigorating undertones, it offers a unique scent that energizes and uplifts." 
  },
  { 
    id: 6, 
    brandName: "ELIXIR", 
    image: white, 
    name: "Silken Whisper", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "silken-whisper", 
    desc: "Embrace Delicate Serenity: Immerse yourself in the subtle sweetness and fragrant charm of this fragrance. Its smooth, elegant notes invite you to savor its pure essence, providing a moment of tranquility." 
  },
  { 
    id: 7, 
    brandName: "ELIXIR", 
    image: magenta, 
    name: "Berry Delight", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "berry-delight", 
    desc: "Unleash a Berry Burst: Indulge in the vibrant sweetness of this fragrance, where hibiscus and berries create a stunning aroma with a sweet, tart profile, promising a delicious and visually captivating experience." 
  },
  { 
    id: 8, 
    brandName: "ELIXIR", 
    image: black, 
    name: "Noir Strength", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "noir-strength", 
    desc: "Unleash Your Inner Strength: Steep yourself in the robust richness of this fragrance, a classic blend with hints of spice and depth. Its invigorating aroma is perfect for conquering your day or unwinding in the evening." 
  },
  { 
    id: 9, 
    brandName: "ELIXIR", 
    image: limegreen, 
    name: "Zesty Awakening", 
    price: "$129", 
    category: "Fragrance", 
    size: "50ml", 
    featured: true, 
    slug: "zesty-awakening", 
    desc: "Invigorate Your Senses: Embrace the vibrant zest of this fragrance, infused with citrus notes that awaken your senses and refresh your spirit, perfect for a lively start to your day." 
  },
  { 
    id: 10, 
    brandName: "ELIXIR", 
    image: indigo, 
    name: "Indigo Mystique", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "indigo-mystique", 
    desc: "Explore Earthy Allure: Unravel the mystery of this unique fragrance, a blend of deep floral and earthy notes that entice your senses with its visual and aromatic allure." 
  },
  { 
    id: 11, 
    brandName: "ELIXIR", 
    image: yellow, 
    name: "Golden Essence", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "golden-essence", 
    desc: "Discover Rare Refinement: Indulge in this rare fragrance that offers mellow floral notes with hints of honey, tantalizing your senses and piquing your curiosity." 
  },
  { 
    id: 12, 
    brandName: "ELIXIR", 
    image: brown, 
    name: "Nutty Serenity", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "nutty-serenity", 
    desc: "Embrace Natural Goodness: Discover the naturally nutty aroma of this fragrance, rich in warmth and comfort, making it a satisfying choice for any occasion." 
  },
  { 
    id: 13, 
    brandName: "ELIXIR", 
    image: puerh, 
    name: "Aged Elegance", 
    price: "$129", 
    category: "Fragrance", 
    size: "50ml", 
    featured: true, 
    slug: "aged-elegance", 
    desc: "Embark on a Timeless Journey: Savor the sophisticated depth of this fragrance, offering complex earthy notes with hints of chocolate and spice, rewarding those who appreciate its character." 
  },
  { 
    id: 14, 
    brandName: "ELIXIR", 
    image: neem, 
    name: "Healing Essence", 
    price: "$129", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "healing-essence", 
    desc: "Embrace Natural Wellness: Discover the unique aroma of this fragrance, known for its traditional healing properties, offering a bitter yet earthy scent that is both intriguing and beneficial." 
  },
  { 
    id: 15, 
    brandName: "ELIXIR", 
    image: blueberry, 
    name: "Blueberry Bliss", 
    price: "$129", 
    category: "Fragrance", 
    size: "50ml", 
    featured: true, 
    slug: "blueberry-bliss", 
    desc: "Antioxidant Oasis: Awaken your senses with the bursting aroma of blueberries. This refreshing scent is naturally sweet and invigorating, perfect for a guilt-free indulgence." 
  },
  { 
    id: 16, 
    brandName: "ELIXIR", 
    image: blue, 
    name: "Azure Dream", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "azure-dream", 
    desc: "Transform Your Scent Experience: Witness the magic of this fragrance as it unfolds into a vibrant aroma. Its slightly sweet, earthy notes are perfect for any occasion." 
  },
  { 
    id: 17, 
    brandName: "ELIXIR", 
    image: coral, 
    name: "Coral Escape", 
    price: "$99", 
    category: "Fragrance", 
    size: "50ml", 
    featured: false, 
    slug: "coral-escape", 
    desc: "Escape to Paradise: Let your senses travel to the tropics with this fragrance, where exotic floral notes and fruity undertones create a refreshing getaway in every spritz." 
  },
  { 
    id: 18, 
    brandName: "ELIXIR", 
    image: chamomile, 
    name: "Tranquil Blossom", 
    price: "$129", 
    category: "Fragrance", 
    size: "50ml", 
    featured: true, 
    slug: "tranquil-blossom", 
    desc: "Unwind in Tranquility: Find your haven in this calming fragrance. Known for its soothing properties, it gently envelops your senses, preparing you for restful moments or peace amidst chaos." 
  }
];

export default Products;
