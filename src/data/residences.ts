import heroFacadeImg from '../assets/images/hero_facade_twilight_1789794417098.jpg';
import signatureResidenceImg from '../assets/images/signature_residence_1789794432412.jpg';
import interiorLivingImg from '../assets/images/interior_living_room_1789794443645.jpg';
import interiorBedroomImg from '../assets/images/interior_bedroom_1789794454895.jpg';
import interiorDiningImg from '../assets/images/interior_dining_room_1789794465687.jpg';
import architecturalDetailImg from '../assets/images/architectural_detail_1789794477768.jpg';
import landscapePavilionImg from '../assets/images/landscape_pavilion_1789794488324.jpg';
import eveningCtaImg from '../assets/images/evening_cta_monolith_1789794501548.jpg';
import cantileverImg from '../assets/images/residence_cantilever_1789794514799.jpg';
import sanctuaryImg from '../assets/images/residence_sanctuary_1789794523601.jpg';
import { Residence, InteriorSpace, LifestyleItem } from '../types.ts';

export const ASSETS = {
  heroFacade: heroFacadeImg,
  signatureResidence: signatureResidenceImg,
  interiorLiving: interiorLivingImg,
  interiorBedroom: interiorBedroomImg,
  interiorDining: interiorDiningImg,
  architecturalDetail: architecturalDetailImg,
  landscapePavilion: landscapePavilionImg,
  eveningCta: eveningCtaImg,
  residenceCantilever: cantileverImg,
  residenceSanctuary: sanctuaryImg,
};

export const FEATURED_RESIDENCES: Residence[] = [
  {
    id: 'residence-01',
    name: 'The Solstice Monolith',
    tagline: 'Sculpted from roman travertine & black reflective water',
    location: 'Engadin Plateau, Switzerland (Fictional Demo)',
    type: 'Architectural Villa',
    area: '14,200 sq ft / 1,320 m²',
    suites: 6,
    baths: 8,
    image: signatureResidenceImg,
    description: 'A monolithic architectural volume resting on cantilevered travertine terraces above quiet reflecting pools. Floor-to-ceiling acoustic glass frames the alpine horizon while warm 2700K lighting sculpts the interior atmosphere.',
    highlights: ['28m Heated Black Granite Pool', 'Acoustically Isolated Music Salon', 'Private Subterranean 6-Bay Gallery'],
    specs: {
      ceilingHeight: '4.2m / 13.8 ft',
      materials: 'Honed Roman Travertine, Fluted Patinated Bronze, Low-Iron Acoustic Glass',
      exposure: 'South-Southwest Horizon',
      pool: '28m x 6m Cantilevered Water Mirror',
    },
  },
  {
    id: 'residence-02',
    name: 'The Cantilever Pavilion',
    tagline: 'Defying gravity across tiered stone terraces',
    location: 'Kyoto Highlands, Japan (Fictional Demo)',
    type: 'Cantilevered Estate',
    area: '11,800 sq ft / 1,096 m²',
    suites: 5,
    baths: 6,
    image: cantileverImg,
    description: 'Floating concrete and dark bronze structural forms extending outward into the pine forest canopy. Designed with continuous sightlines that blur the boundary between landscaped courtyard and living pavilions.',
    highlights: ['Cantilevered Upper Living Deck', 'Sculptural Bonsai Courtyard', 'Onsen-Inspired Basalt Spa Suite'],
    specs: {
      ceilingHeight: '3.8m / 12.5 ft',
      materials: 'Cast Architectural Concrete, Brushed Dark Bronze, Hinoki Cypress',
      exposure: 'West Sunset Ridge',
      pool: '22m Heated Lap Pool with Waterfall Reveal',
    },
  },
  {
    id: 'residence-03',
    name: 'The Travertine Sanctuary',
    tagline: 'Quiet sanctuary organized around an internal water mirror',
    location: 'Lake Como Ridges, Italy (Fictional Demo)',
    type: 'Lakeside Sanctuary',
    area: '12,500 sq ft / 1,160 m²',
    suites: 5,
    baths: 7,
    image: sanctuaryImg,
    description: 'Composed of three interlocking pavilion volumes surrounding a tranquil central reflecting courtyard. Every living volume enjoys floor-to-ceiling glass openings with seamless transition onto stone verandas.',
    highlights: ['Internal Water Mirror Courtyard', 'Custom Stone Wine Cellar', 'Wellness Spa & Cryo Pavilion'],
    specs: {
      ceilingHeight: '4.0m / 13.1 ft',
      materials: 'Warm Roman Travertine, Charcoal Quartzite, Frameless Triple-Glazed Glass',
      exposure: 'South-East Lake Panorama',
      pool: '25m Natural Stone Infinity Edge',
    },
  },
];

export const SIGNATURE_RESIDENCE: Residence = {
  id: 'signature-estate',
  name: 'Pavilion Zero — The Crown Residence',
  tagline: 'The pinnacle of modernist architectural clarity and spatial luxury',
  location: 'Private Alpine Peninsula (Fictional Demo)',
  type: 'Signature Architectural Compound',
  area: '18,500 sq ft / 1,720 m²',
  suites: 7,
  baths: 10,
  image: heroFacadeImg,
  description: 'Pavilion Zero represents the purest expression of our architectural ethos. Designed without visual compromise, the residence integrates structural travertine monoliths, continuous flush glazing, and meditative water mirrors into a singular harmonious composition.',
  highlights: [
    'Complete biometric private access & subterranean pavilion',
    'Curated interior architecture with custom Italian furnishings',
    'Olympic-length black granite reflecting pool with underwater sound',
    'Independent 2-suite guest pavilion and private helipad platform',
  ],
  specs: {
    ceilingHeight: '4.5m Double-Volume Great Room',
    materials: 'Unfilled Roman Travertine, Patinated Bronze Mullions, Custom Black Quartzite',
    exposure: '360° Unobstructed Mountain & Lake Panorama',
    pool: '32m Heated Infinity Water Mirror',
  },
};

export const INTERIOR_SPACES: InteriorSpace[] = [
  {
    id: 'living-room',
    title: 'The Great Living Room',
    subtitle: 'Proportions calibrated for serenity and conversation',
    description: 'Double-height volume enclosed by frameless acoustic glass looking out onto misty pine gardens. Custom low-profile Italian seating in raw charcoal linen surrounds a monolithic travertine coffee table anchored by subtle linear recessed illumination.',
    image: interiorLivingImg,
    features: ['Recessed 2700K linear architectural cove', 'Monolithic hand-honed travertine elements', 'Acoustically tuned plaster ceilings'],
  },
  {
    id: 'bedroom',
    title: 'The Master Suite',
    subtitle: 'A private sanctuary of tactile textures and quiet morning light',
    description: 'Featuring a monolithic travertine feature wall, custom king platform dressed in raw washed linen, and floor-to-ceiling corner glazing framing serene twilight reflections across the water courtyard.',
    image: interiorBedroomImg,
    features: ['Integrated concealed motorized blackout screens', 'Dual sculptural bronze walk-in dressing suites', 'Direct private terrace access to reflection pool'],
  },
  {
    id: 'dining-room',
    title: 'The Dining Pavilion',
    subtitle: 'Where culinary art meets monolithic material grandeur',
    description: 'Anchored by a hand-carved black granite and travertine banquet table seating twelve, framed by an architectural fluted bronze pendant installation and direct sliding glass openings to the evening courtyard.',
    image: interiorDiningImg,
    features: ['Sculptural fluted bronze pendant lighting', 'Temperature-controlled sommelier wine wall', 'Seamless flush threshold to outdoor dining loggia'],
  },
  {
    id: 'lounge',
    title: 'The Evening Water Lounge',
    subtitle: 'Twilight reflections and whispered atmosphere',
    description: 'Designed for contemplation and quiet conversation as dusk descends. Floor-to-ceiling glass walls slide back entirely into concealed wall pockets, merging interior sanctuary with the black reflective pool.',
    image: landscapePavilionImg,
    features: ['Pocketing acoustic glass panels', 'Zero-edge black granite perimeter pool', 'Integrated gas ribbon flame installation'],
  },
];

export const LIFESTYLE_ITEMS: LifestyleItem[] = [
  {
    id: 'landscape',
    title: 'Sculpted Landscape',
    category: 'Environment',
    description: 'Landscaped grounds composed of meditative water mirrors, mature Japanese maples, and floating travertine steps that celebrate changing seasonal light.',
    image: landscapePavilionImg,
    caption: 'Water courtyards designed to mirror the dusk sky',
  },
  {
    id: 'materiality',
    title: 'Honed Materiality',
    category: 'Craftsmanship',
    description: 'Uncompromising tactile materials: porous Roman travertine, patinated architectural bronze, and low-iron crystal glazing assembled with 5mm shadow reveal lines.',
    image: architecturalDetailImg,
    caption: 'Macro precision where raw stone meets warm bronze',
  },
  {
    id: 'evening',
    title: 'Atmospheric Dusk',
    category: 'Lighting',
    description: 'Curated 2700K circadian lighting architecture designed to preserve the mystery of the night while highlighting structural geometries.',
    image: eveningCtaImg,
    caption: 'Warm ambient glow dissolving into alpine night',
  },
];

export const PROPERTY_COLLECTION: Residence[] = [
  {
    id: 'col-01',
    name: 'The Glass Pavilion',
    tagline: 'Purity of transparency and framed views',
    location: 'Valais Valley (Fictional Demo)',
    type: 'Pavilion Villa',
    area: '9,800 sq ft',
    suites: 4,
    baths: 5,
    image: heroFacadeImg,
    description: 'A minimalist pavilion centered on transparency and panoramic nature connection.',
    highlights: ['Triple glazed curtain walls', 'Private forest clearing', 'Wine gallery'],
    specs: { ceilingHeight: '3.8m', materials: 'Glass, Bronze, Travertine', exposure: 'South', pool: '20m Pool' },
  },
  {
    id: 'col-02',
    name: 'The Horizon Monolith',
    tagline: 'Cantilevered majesty overlooking the alpine basin',
    location: 'St. Moritz Ridgeline (Fictional Demo)',
    type: 'Mountain Estate',
    area: '13,400 sq ft',
    suites: 6,
    baths: 7,
    image: cantileverImg,
    description: 'Tiered stone terraces anchored into granite bedrock with dramatic cantilevered wings.',
    highlights: ['Subterranean heated driveway', 'Wellness spa', 'Private observatory'],
    specs: { ceilingHeight: '4.2m', materials: 'Granite, Oak, Travertine', exposure: 'Southwest', pool: '25m Pool' },
  },
  {
    id: 'col-03',
    name: 'The Lakefront Atrium',
    tagline: 'Quiet symmetry along the shoreline',
    location: 'Lake Geneva Sanctuary (Fictional Demo)',
    type: 'Waterfront Estate',
    area: '15,000 sq ft',
    suites: 6,
    baths: 8,
    image: sanctuaryImg,
    description: 'Three interconnected pavilion volumes opening directly onto black stone water mirrors.',
    highlights: ['Private boat boathouse slip', 'Zen courtyards', 'Executive study'],
    specs: { ceilingHeight: '4.0m', materials: 'Honed Travertine, Dark Bronze', exposure: 'West', pool: '28m Infinity' },
  },
  {
    id: 'col-04',
    name: 'The Solstice Sanctuary',
    tagline: 'Private sanctuary embracing circadian sunlight',
    location: 'Ticino Foothills (Fictional Demo)',
    type: 'Architectural Residence',
    area: '11,200 sq ft',
    suites: 5,
    baths: 6,
    image: signatureResidenceImg,
    description: 'Sculpted travertine massing creating sheltered garden courtyards bathed in golden light.',
    highlights: ['Reflecting infinity pool', 'Sculptural stair volume', 'Private art gallery'],
    specs: { ceilingHeight: '3.9m', materials: 'Roman Travertine, Basalt', exposure: 'South', pool: '22m Mirror' },
  },
];
