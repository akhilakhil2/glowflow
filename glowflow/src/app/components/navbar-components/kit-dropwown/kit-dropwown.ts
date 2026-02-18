import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-kit-dropwown',
  imports: [RouterLink],
  templateUrl: './kit-dropwown.html',
  styles: [`
    #kit-dropdown {
      left: calc(var(--spacing) * -86)
    }
  `],
})
export class KitDropwown {

 isMakupDropdownOpen = false;
  toggleMenuMakeup() {
    this.isMakupDropdownOpen = !this.isMakupDropdownOpen;
  }

  isFaceDropdownOpen = false;
  toggleFaceCollections() {
  this.isFaceDropdownOpen = !this.isFaceDropdownOpen;
}

islipsDropdownOpen = false;
  togglelipsCollections() {
  this.islipsDropdownOpen = !this.islipsDropdownOpen;
}

iseyeDropdownOpen = false;
  toggleeyeCollections() {
  this.iseyeDropdownOpen = !this.iseyeDropdownOpen;
}

isbrushDropdownOpen = false;
  togglebrushCollections() {
  this.isbrushDropdownOpen = !this.isbrushDropdownOpen;
}

isnailDropdownOpen = false;
  togglenailCollections() {
  this.isnailDropdownOpen = !this.isnailDropdownOpen;
}

iskitDropdownOpen = false;
  togglekitCollections() {
  this.iskitDropdownOpen = !this.iskitDropdownOpen;
}



faceProducts = [
  { 
    name: 'Face Primer', 
    href: '/makeup/face-primer', 
    title: 'The perfect base for long-lasting makeup' 
  },
  { 
    name: 'Concealer', 
    href: '/makeup/concealer', 
    title: 'Hide imperfections and brighten under-eyes' 
  },
  { 
    name: 'Foundation', 
    href: '/makeup/foundation', 
    title: 'Even out your skin tone with full coverage' 
  },
  { 
    name: 'Compact', 
    href: '/makeup/compact', 
    title: 'Set your makeup for a matte finish' 
  },
  { 
    name: 'Contour', 
    href: '/makeup/contour', 
    title: 'Define and sculpt your facial features' 
  },
  { 
    name: 'Loose Powder', 
    href: '/makeup/loose-powder', 
    title: 'Feather-light powder for a natural glow' 
  }
];

eyeProducts = [
  { 
    name: 'Kajal', 
    href: '/makeup/kajal', 
    title: 'Define your waterline with intense, smudge-proof pigment' 
  },
  { 
    name: 'Eyeliner', 
    href: '/makeup/eyeliner', 
    title: 'Create sharp wings or subtle lines for dramatic eyes' 
  },
  { 
    name: 'Mascara', 
    href: '/makeup/mascara', 
    title: 'Add volume, length, and lift to your natural lashes' 
  },
  { 
    name: 'Eye Shadow', 
    href: '/makeup/eye-shadow', 
    title: 'Express your style with vibrant colors and diverse finishes' 
  },
  { 
    name: 'Eye Brow Enhancers', 
    href: '/makeup/eye-brow-enhancers', 
    title: 'Shape and fill for perfectly groomed, natural-looking brows' 
  },
  { 
    name: 'Eye Primer', 
    href: '/makeup/eye-primer', 
    title: 'Prevent creasing and make your eyeshadow pop all day' 
  }
];

lipProducts = [
  { 
    name: 'Lipstick', 
    href: '/makeup/lipstick', 
    title: 'Discover iconic shades in creamy matte and satin finishes' 
  },
  { 
    name: 'Liquid Lipstick', 
    href: '/makeup/liquid-lipstick', 
    title: 'High-pigment color with a long-lasting, transfer-proof finish' 
  },
  { 
    name: 'Lip Crayon', 
    href: '/makeup/lip-crayon', 
    title: 'Effortless application with the precision of a liner and color of a lipstick' 
  },
  { 
    name: 'Lip Gloss', 
    href: '/makeup/lip-gloss', 
    title: 'Add high-shine brilliance and a touch of hydration to your lips' 
  },
  { 
    name: 'Lip Liner', 
    href: '/makeup/lip-liner', 
    title: 'Define your lip contour and prevent color from feathering' 
  },
  { 
    name: 'Lip Plumper', 
    href: '/makeup/lip-plumper', 
    title: 'Enhance your natural pout with a fuller, more voluminous look' 
  }
];

nailProducts = [
  { 
    name: 'Nail Polish', 
    href: '/makeup/nail-polish', 
    title: 'Express your style with vibrant colors and high-shine finishes' 
  },
  { 
    name: 'Nail Care', 
    href: '/makeup/nail-care', 
    title: 'Strengthen and nourish your nails for a healthy, salon-like glow' 
  },
  { 
    name: 'Nail Polish Remover', 
    href: '/makeup/nail-polish-remover', 
    title: 'Effortlessly clear away old polish while keeping your cuticles hydrated' 
  }
];
kitProducts = [
  { 
    name: 'Makeup Kits', 
    href: '/makeup/makeup-kits', 
    title: 'All-in-one essentials curated for beginners and professionals' 
  },
  { 
    name: 'Makeup Combos', 
    href: '/makeup/makeup-combos', 
    title: 'Value-driven pairings of your favorite products for a coordinated look' 
  }
];
toolProducts = [
  { 
    name: 'Face Brush', 
    href: '/makeup/face-brush', 
    title: 'Expertly designed brushes for seamless foundation, blush, and contour application' 
  },
  { 
    name: 'Eye Brush', 
    href: '/makeup/eye-brush', 
    title: 'Precision tools for blending, shading, and defining your eye looks' 
  },
  { 
    name: 'Lip Brush', 
    href: '/makeup/lip-brush', 
    title: 'Achieve a perfect, crisp lip line and even color distribution' 
  },
  { 
    name: 'Brush Sets', 
    href: '/makeup/brush-sets', 
    title: 'Complete collections of essential brushes for a full-face transformation' 
  },
  { 
    name: 'Brush Cleaners', 
    href: '/makeup/brush-cleaners', 
    title: 'Maintain hygiene and extend the life of your tools with deep-cleansing formulas' 
  },
  { 
    name: 'Sponges & Applicators', 
    href: '/makeup/sponges-applicators', 
    title: 'Versatile sponges for a streak-free, airbrushed finish' 
  }
];
}
