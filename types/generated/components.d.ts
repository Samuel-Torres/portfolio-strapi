import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroImageHeroImage extends Schema.Component {
  collectionName: 'components_hero_image_hero_images';
  info: {
    displayName: 'heroImage';
    icon: 'cast';
    description: '';
  };
  attributes: {
    imageSource: Attribute.Media;
  };
}

export interface TextMediaAsideTextMediaAside extends Schema.Component {
  collectionName: 'components_text_media_aside_text_media_asides';
  info: {
    displayName: 'textMediaAside';
    icon: 'layout';
  };
  attributes: {
    text: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 1000;
      }>;
    media: Attribute.Media & Attribute.Required;
    flip: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface TextOnlyTextOnly extends Schema.Component {
  collectionName: 'components_text_only_text_onlies';
  info: {
    displayName: 'textOnly';
    icon: 'bold';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero-image.hero-image': HeroImageHeroImage;
      'text-media-aside.text-media-aside': TextMediaAsideTextMediaAside;
      'text-only.text-only': TextOnlyTextOnly;
    }
  }
}
