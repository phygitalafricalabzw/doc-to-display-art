import groats from "@/assets/groats.jpg";
import porridge from "@/assets/porridge.jpg";
import meal from "@/assets/meal.jpg";
import flour from "@/assets/flour.jpg";
import tea from "@/assets/tea.jpg";
import honey from "@/assets/honey.jpg";
import kasha from "@/assets/kasha.jpg";

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
    slug: "buckwheat-groats",
    name: "Buckwheat Groats",
    tag: "Whole grain",
    img: groats,
    copy: "Clean, hulled whole grains — mild in flavour and rich in complete plant protein. For porridge, soups, salads and snack mixes.",
    tagline: "The whole grain, in its purest form.",
    description: [
      "Our buckwheat groats are the cleaned, hulled seeds of the buckwheat plant — pale, triangular kernels with a delicate, slightly nutty taste.",
      "Grown in the Zimbabwean highlands and gently processed to preserve their full nutritional profile, they cook in under twenty minutes and form the foundation of the entire Stellar Foods range.",
    ],
    highlights: ["Naturally gluten-free", "Complete plant protein", "High in fibre & magnesium", "Low glycaemic index"],
    uses: ["Stove-top porridge", "Pilafs and grain bowls", "Hearty soups and stews", "Salad bases and side dishes"],
    pack: [
      { label: "Retail pack", value: "500 g · 1 kg" },
      { label: "Wholesale", value: "5 kg · 25 kg sacks" },
      { label: "Shelf life", value: "12 months" },
    ],
  },
  {
    slug: "instant-porridge",
    name: "Instant Porridge",
    tag: "Ready in minutes",
    img: porridge,
    copy: "A fast-cooking, nutrient-dense breakfast cereal. Gluten-free, high in fibre, with a smooth nutty finish.",
    tagline: "A warm bowl of buckwheat, in minutes.",
    description: [
      "Pre-milled and lightly toasted for fast cooking, our instant porridge delivers the full nutrition of whole buckwheat in a smooth, comforting bowl.",
      "Ideal for busy mornings, school feeding programmes and recovery meals — simply add hot water or milk and stir.",
    ],
    highlights: ["Ready in under 3 minutes", "No added sugar or salt", "High in fibre & antioxidants", "Suitable for all ages"],
    uses: ["Quick weekday breakfast", "Overnight soaked porridge", "Base for fruit and nut bowls", "Nutritious infant feeds"],
    pack: [
      { label: "Retail pack", value: "400 g · 1 kg" },
      { label: "Wholesale", value: "10 kg cartons" },
      { label: "Shelf life", value: "9 months" },
    ],
  },
  {
    slug: "buckwheat-meal",
    name: "Buckwheat Meal",
    tag: "Coarse ground",
    img: meal,
    copy: "A wholesome, coarse-ground meal with earthy taste — a nourishing alternative to maize or sorghum.",
    tagline: "A nourishing alternative to traditional staples.",
    description: [
      "Coarsely milled from whole buckwheat groats, this hearty meal offers the satisfying texture of sadza or polenta with a richer, more rounded nutritional profile.",
      "An everyday staple for households seeking variety beyond maize and sorghum, without sacrificing the familiar comfort of a warm, cooked grain.",
    ],
    highlights: ["Whole-grain nutrition", "Naturally gluten-free", "Rich in B vitamins", "Sustained-energy carbohydrate"],
    uses: ["Buckwheat sadza", "Porridges and dumplings", "Savoury polenta-style sides", "Traditional baked loaves"],
    pack: [
      { label: "Retail pack", value: "1 kg · 2 kg" },
      { label: "Wholesale", value: "10 kg · 25 kg sacks" },
      { label: "Shelf life", value: "10 months" },
    ],
  },
  {
    slug: "buckwheat-flour",
    name: "Buckwheat Flour",
    tag: "Stone-milled",
    img: flour,
    copy: "Finely milled from premium Zimbabwean buckwheat. Naturally gluten-free for pancakes, breads and rotis.",
    tagline: "Fine, fragrant and naturally gluten-free.",
    description: [
      "Stone-milled from premium whole groats, our flour carries a soft greyish hue and a delicate, slightly earthy aroma that lifts both sweet and savoury bakes.",
      "A trusted ingredient for gluten-free kitchens, artisan bakers and traditional recipes alike — from French galettes to East African chapatis.",
    ],
    highlights: ["Stone-milled in small batches", "Naturally gluten-free", "Rich in rutin & antioxidants", "Excellent for blends with rice or sorghum flour"],
    uses: ["Pancakes, crêpes and galettes", "Gluten-free breads", "Rotis, chapatis and flatbreads", "Cookies, muffins and noodles"],
    pack: [
      { label: "Retail pack", value: "500 g · 1 kg" },
      { label: "Wholesale", value: "5 kg · 25 kg sacks" },
      { label: "Shelf life", value: "8 months" },
    ],
  },
  {
    slug: "buckwheat-tea",
    name: "Buckwheat Tea",
    tag: "Loose leaf",
    img: tea,
    copy: "A toasted, caffeine-free infusion with a soft amber colour and a clean, malty aroma.",
    tagline: "A quiet, golden cup — caffeine-free by nature.",
    description: [
      "Whole roasted buckwheat groats steeped in hot water release a soft amber infusion known across East Asia as soba-cha — gently sweet, malty and warming.",
      "Caffeine-free and naturally rich in rutin, it makes a calming everyday brew and a graceful close to any meal.",
    ],
    highlights: ["Naturally caffeine-free", "Rich in rutin & antioxidants", "Gentle, malty flavour", "Re-steepable up to 3 times"],
    uses: ["Hot infusion", "Iced summer brew", "Blended with citrus or honey", "After-meal digestif"],
    pack: [
      { label: "Retail pack", value: "100 g · 250 g" },
      { label: "Wholesale", value: "1 kg pouches" },
      { label: "Shelf life", value: "18 months" },
    ],
  },
  {
    slug: "buckwheat-honey",
    name: "Buckwheat Honey",
    tag: "Raw apiary",
    img: honey,
    copy: "Dark, mineral-rich honey gathered from hives set among our buckwheat fields.",
    tagline: "Dark, robust honey from our own hives.",
    description: [
      "Gathered from bees foraging across our buckwheat fields in flower, this honey is deep amber to near-black with a bold, malty character reminiscent of molasses.",
      "Raw, unfiltered and minimally handled, it carries the full mineral richness for which buckwheat honey is prized around the world.",
    ],
    highlights: ["Raw and unfiltered", "Naturally high in antioxidants", "Mineral-rich, robust flavour", "Single-origin Zimbabwean apiary"],
    uses: ["Spoon straight from the jar", "Glaze for roasted vegetables", "Pair with aged cheese", "Soothing addition to tea"],
    pack: [
      { label: "Retail jar", value: "250 g · 500 g" },
      { label: "Wholesale", value: "5 kg pails" },
      { label: "Shelf life", value: "24 months" },
    ],
  },
  {
    slug: "buckwheat-kasha",
    name: "Buckwheat Kasha",
    tag: "Unroasted",
    img: kasha,
    copy: "Gently hulled, unroasted grains preserving full nutritional value and a mild, natural flavour.",
    tagline: "The unroasted classic — pure and versatile.",
    description: [
      "Our kasha is hulled buckwheat in its gentlest form: green, unroasted and minimally processed to retain its full enzymatic and nutritional value.",
      "Soft in flavour and quick to cook, it slips into both traditional Eastern European recipes and modern plant-forward menus with equal ease.",
    ],
    highlights: ["Unroasted, raw kernels", "Sprout-friendly", "Mild, neutral flavour", "Cooks in 15 minutes"],
    uses: ["Sprouted in salads", "Stuffed vegetables", "Soft pilafs and bowls", "Plant-based meat alternatives"],
    pack: [
      { label: "Retail pack", value: "500 g · 1 kg" },
      { label: "Wholesale", value: "5 kg · 25 kg sacks" },
      { label: "Shelf life", value: "10 months" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}