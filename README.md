# APP INTERFACE SPOTIFY

# ADD DETAILS PAGE

ionic g page album

# DIRECTIVE FOR FADE ANIMATION

ionic g module directives/sharedDirectives --flat
ionic g directive directives/imageFade

# ADD LINES TO TSCONFIG

"compilerOptions": {
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    
}