import seedAsset from "@/assets/products/Buckwheat_Seed.png.asset.json";
import groatsAsset from "@/assets/products/Buckwheat_Groats.png.asset.json";
import kashaAsset from "@/assets/products/Buckwheat_Kasha.png.asset.json";
import porridgeAsset from "@/assets/products/Instant_Porridge.png.asset.json";
import mealAsset from "@/assets/products/Buckwheat_Meal.png.asset.json";
import mealBlendAsset from "@/assets/products/Buckwheat_Meal_Blend.png.asset.json";
import flourAsset from "@/assets/products/Buckwheat_Flour.png.asset.json";
import teaAsset from "@/assets/products/Buckwheat_Tea.png.asset.json";
import honeyAsset from "@/assets/products/Buckwheat_Honey.png.asset.json";
import peanutButterAsset from "@/assets/products/Buckwheat_Peanut_Butter.png.asset.json";

export type Product = {
  slug: string;
  name: string;
  tag: string;
  img: string;
  copy: string;
  tagline: string;
  description: string[];
  highlights: string[];
  uses: string[];
  pack: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "buckwheat-seed",
    name: "Buckwheat Seed",
    tag: "Certified planting seed",
    img: seedAsset.url,
    copy: "Specially graded, cleaned and certified Fagopyrum esculentum seed — the starting point of everything we grow.",
    tagline: "Where the whole story begins.",
    description: [
      "Our buckwheat seed is graded and cleaned to the standards of a registered Buckwheat Seed Plant, ready for growers who want a proven, high-germination crop.",
      "The same seed line planted across our own highland fields — offered to farmers and cooperatives building out their own buckwheat production.",
    ],
    highlights: ["Germination ≥ 90%", "Cleaned and graded", "Suited to Zimbabwean highlands", "Short-season, low-input crop"],
    uses: ["Field planting", "Cover cropping", "Pollinator forage", "Smallholder trials"],
    pack: [
      { label: "Retail pack", value: "1 kg" },
      { label: "Wholesale", value: "10 kg · 25 kg sacks" },
      { label: "Shelf life", value: "12 months (cool, dry storage)" },
    ],
  },
  {
    slug: "buckwheat-groats",
    name: "Buckwheat Groats",
    tag: "Whole grain",
    img: groatsAsset.url,
    copy: "Clean, hulled whole grains — mild in flavour and rich in complete plant protein. For porridge, soups, salads and snack mixes.",
    tagline: "The whole grain, in its purest form.",
    description: [
      "Our buckwheat groats are the cleaned, hulled seeds of the buckwheat plant — pale, triangular kernels with a delicate, slightly nutty taste.",
      "Grown in the Zimbabwean highlands and gently processed to preserve their full nutritional profile, they cook in under twenty minutes and form the foundation of the entire Stellar Foods range.",
    ],
    highlights: ["Naturally gluten-free", "Complete plant protein", "High in fibre & magnesium", "Low glycaemic index"],
    uses: ["Stove-top porridge", "Pilafs and grain bowls", "Hearty soups and stews", "Salad bases and side dishes"],
    pack: [
      { label: "Retail pack", value: "750 g" },
      { label: "Wholesale", value: "5 kg · 25 kg sacks" },
      { label: "Shelf life", value: "12 months" },
    ],
  },
  {
    slug: "buckwheat-kasha",
    name: "Buckwheat Kasha",
    tag: "Whole cereal",
    img: kashaAsset.url,
    copy: "A 100% natural, roasted-style cereal made from whole buckwheat — high in anti-oxidants and essential amino acids.",
    tagline: "A nourishing bowl, prepared just like jungle oats.",
    description: [
      "Buckwheat kasha is a whole-grain cereal or porridge prepared much like traditional oats — cooked in milk or water and served hot at breakfast or as a side.",
      "Naturally high in anti-oxidants and vitamins, gentle on blood sugar and good for gut health, kasha is a wholesome, everyday staple with a soft, satisfying texture.",
    ],
    highlights: ["High in anti-oxidants", "Complete amino acid profile", "Supports blood sugar management", "Vegan · gluten-free · non-GMO"],
    uses: ["Breakfast cereal", "Traditional side dish", "Sweetened with honey & peanut butter", "Stuffed vegetables and pilafs"],
    pack: [
      { label: "Retail pack", value: "1.25 kg" },
      { label: "Wholesale", value: "5 kg · 25 kg sacks" },
      { label: "Shelf life", value: "10 months" },
    ],
  },
  {
    slug: "instant-porridge",
    name: "Instant Porridge",
    tag: "Ready in minutes",
    img: porridgeAsset.url,
    copy: "A fast-cooking, nutrient-dense breakfast cereal. Gluten-free, high in fibre, with a smooth nutty finish.",
    tagline: "A warm bowl of buckwheat, in minutes.",
    description: [
      "Pre-milled and lightly toasted for fast cooking, our instant porridge delivers the full nutrition of whole buckwheat in a smooth, comforting bowl.",
      "Ideal for busy mornings, school feeding programmes and recovery meals — simply add hot water or milk and stir.",
    ],
    highlights: ["Ready in under 3 minutes", "Gluten free · nut free · non-GMO", "High in fibre & antioxidants", "Suitable for all ages"],
    uses: ["Quick weekday breakfast", "Overnight soaked porridge", "Base for fruit and nut bowls", "Nutritious infant feeds"],
    pack: [
      { label: "Retail pack", value: "700 g" },
      { label: "Wholesale", value: "10 kg cartons" },
      { label: "Shelf life", value: "9 months" },
    ],
  },
  {
    slug: "buckwheat-meal",
    name: "Buckwheat Meal",
    tag: "Coarse ground",
    img: mealAsset.url,
    copy: "A wholesome, coarse-ground meal with earthy taste — a nourishing alternative to maize or sorghum.",
    tagline: "A nourishing alternative to traditional staples.",
    description: [
      "Coarsely milled from whole buckwheat groats, this hearty meal offers the satisfying texture of sadza or polenta with a richer, more rounded nutritional profile.",
      "An everyday staple for households seeking variety beyond maize and sorghum, without sacrificing the familiar comfort of a warm, cooked grain.",
    ],
    highlights: ["Whole-grain nutrition", "Naturally gluten-free", "Rich in B vitamins", "Sustained-energy carbohydrate"],
    uses: ["Buckwheat sadza", "Porridges and dumplings", "Savoury polenta-style sides", "Traditional baked loaves"],
    pack: [
      { label: "Retail pack", value: "5 kg" },
      { label: "Wholesale", value: "10 kg · 25 kg sacks" },
      { label: "Shelf life", value: "10 months" },
    ],
  },
  {
    slug: "buckwheat-meal-blend",
    name: "Buckwheat Meal Blend",
    tag: "Sadza blend",
    img: mealBlendAsset.url,
    copy: "A ready-to-cook blend of buckwheat meal — prepared just like your usual sadza or nsima, the normal way.",
    tagline: "Sadza, the normal way — with better nutrition.",
    description: [
      "Our meal blend takes the everyday practice of cooking sadza and lifts its nutritional profile. Cook it exactly as you would maize meal — the technique doesn't change, only the goodness.",
      "Vegan-friendly, wheat free, dairy free and soy free — a familiar staple reimagined for households that want more from their daily plate.",
    ],
    highlights: ["Cooks like traditional sadza", "Rich in zinc, protein and copper", "Vegan · gluten free · non-GMO", "Beneficial for blood sugar management"],
    uses: ["Sadza / nsima", "Firm porridges", "Traditional cooked sides", "Family-scale meal prep"],
    pack: [
      { label: "Retail pack", value: "5 kg" },
      { label: "Wholesale", value: "10 kg · 25 kg sacks" },
      { label: "Shelf life", value: "10 months" },
    ],
  },
  {
    slug: "buckwheat-flour",
    name: "Buckwheat Flour",
    tag: "Stone-milled",
    img: flourAsset.url,
    copy: "Finely milled from premium Zimbabwean buckwheat. Naturally gluten-free for pancakes, breads and rotis.",
    tagline: "Fine, fragrant and naturally gluten-free.",
    description: [
      "Stone-milled from premium whole groats, our flour carries a soft greyish hue and a delicate, slightly earthy aroma that lifts both sweet and savoury bakes.",
      "A trusted ingredient for gluten-free kitchens, artisan bakers and traditional recipes alike — from French galettes to East African chapatis.",
    ],
    highlights: ["100% organic · zero fertilizer", "Wheat · soy · nut free · non-GMO", "Rich in rutin & antioxidants", "Excellent blended with rice or sorghum flour"],
    uses: ["Pancakes, crêpes and galettes", "Gluten-free breads", "Rotis, chapatis and flatbreads", "Cookies, muffins and noodles"],
    pack: [
      { label: "Retail pack", value: "2 kg" },
      { label: "Wholesale", value: "5 kg · 25 kg sacks" },
      { label: "Shelf life", value: "8 months" },
    ],
  },
  {
    slug: "buckwheat-tea",
    name: "Buckwheat Mixed Herbal Tea",
    tag: "Loose leaf herbal blend",
    img: teaAsset.url,
    copy: "A caffeine-free herbal blend built around buckwheat — rich in anti-oxidants, gentle on digestion and calming to sip.",
    tagline: "A quiet, warming cup — caffeine-free by nature.",
    description: [
      "A loose-leaf infusion combining buckwheat with complementary herbs — brewed for antioxidant richness, heart and digestive health, and gentle blood-sugar support.",
      "Naturally caffeine-free, calming and re-steepable, it's an everyday brew that supports weight management, skin health and restful sleep.",
    ],
    highlights: ["Naturally caffeine-free", "Rich in rutin & antioxidants", "Supports heart & digestive health", "Calming, soothing everyday brew"],
    uses: ["Hot infusion (1 tsp per cup)", "Iced summer brew", "With buckwheat honey & lemon", "After-meal digestif"],
    pack: [
      { label: "Retail pack", value: "150 g" },
      { label: "Wholesale", value: "1 kg pouches" },
      { label: "Shelf life", value: "18 months" },
    ],
  },
  {
    slug: "buckwheat-honey",
    name: "Buckwheat Honey",
    tag: "Raw apiary",
    img: honeyAsset.url,
    copy: "Dark, mineral-rich honey gathered from hives set among our buckwheat fields.",
    tagline: "Dark, robust honey from our own hives.",
    description: [
      "Gathered from bees foraging across our buckwheat fields in flower, this honey is deep amber to near-black with a bold, malty character reminiscent of molasses.",
      "Raw, unfiltered and minimally handled, it carries the full mineral richness for which buckwheat honey is prized around the world.",
    ],
    highlights: ["Boosts antioxidants", "Supports heart & skin health", "Balances cholesterol", "Soothes coughs naturally"],
    uses: ["Spoon straight from the jar", "Glaze for roasted vegetables", "Pair with aged cheese", "Soothing addition to tea"],
    pack: [
      { label: "Retail jar", value: "200 g" },
      { label: "Wholesale", value: "5 kg pails" },
      { label: "Shelf life", value: "24 months" },
    ],
  },
  {
    slug: "peanut-butter",
    name: "Peanut Butter",
    tag: "100% natural",
    img: peanutButterAsset.url,
    copy: "A thick, creamy, 100% natural peanut butter from Valleygreen Foods — quality assured, nothing added.",
    tagline: "Pure peanuts, patiently ground.",
    description: [
      "A sister product in the Valleygreen range: freshly roasted peanuts, milled to a rich, spreadable butter with no added palm oil, sugar or preservatives.",
      "The natural pairing for our buckwheat kasha, porridge and honey — a jar of everyday protein that earns its place on the breakfast table.",
    ],
    highlights: ["100% natural · quality assured", "No added sugar or palm oil", "Plant-based protein", "Freshly roasted, small batch"],
    uses: ["Spread on toast", "Stirred into kasha or porridge", "Peanut sauces and stews", "Baking and smoothies"],
    pack: [
      { label: "Retail jar", value: "1 kg" },
      { label: "Wholesale", value: "5 kg pails" },
      { label: "Shelf life", value: "12 months" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}