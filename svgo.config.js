module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'sortAttrs',
    },
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'removeDoctype',
      active: true,
    },
    {
      name: 'removeXMLProcInst',
      active: true,
    },
    {
      name: 'removeComments',
      active: true,
    },
    {
      name: 'removeMetadata',
      active: true,
    },
    {
      name: 'removeXMLNS',
      active: false,
    },
    {
      name: 'removeEditorsNSData',
      active: true,
    },
    {
      name: 'cleanupAttrs',
      active: true,
    },
    {
      name: 'mergeStyles',
      active: true,
    },
    {
      name: 'inlineStyles',
      active: true,
    },
    {
      name: 'minifyStyles',
      active: true,
    },
    {
      name: 'convertStyleToAttrs',
      active: true,
    },
    {
      name: 'cleanupIDs',
      active: true,
    },
    {
      name: 'removeRasterImages',
      active: false,
    },
    {
      name: 'removeUselessDefs',
      active: true,
    },
    {
      name: 'cleanupNumericValues',
      active: true,
    },
    {
      name: 'cleanupListOfValues',
      active: true,
    },
    {
      name: 'convertColors',
      active: true,
      params: {
        currentColor: true,
      },
    },
    {
      name: 'removeUnknownsAndDefaults',
      active: true,
    },
    {
      name: 'removeNonInheritableGroupAttrs',
      active: true,
    },
    {
      name: 'removeUselessStrokeAndFill',
      active: true,
    },
    {
      name: 'removeViewBox',
      active: false,
    },
    {
      name: 'cleanupEnableBackground',
      active: true,
    },
    {
      name: 'removeHiddenElems',
      active: true,
    },
    {
      name: 'removeEmptyText',
      active: true,
    },
    {
      name: 'convertShapeToPath',
      active: true,
    },
    {
      name: 'moveElemsAttrsToGroup',
      active: true,
    },
    {
      name: 'moveGroupAttrsToElems',
      active: true,
    },
    {
      name: 'collapseGroups',
      active: true,
    },
    {
      name: 'convertPathData',
      active: true,
    },
    {
      name: 'convertEllipseToCircle',
      active: true,
    },
    {
      name: 'convertTransform',
      active: true,
    },
    {
      name: 'removeEmptyAttrs',
      active: true,
    },
    {
      name: 'removeEmptyContainers',
      active: true,
    },
    {
      name: 'mergePaths',
      active: true,
    },
    {
      name: 'removeUnusedNS',
      active: true,
    },
    {
      name: 'reusePaths',
      active: false,
    },
    {
      name: 'sortAttrs',
      active: true,
    },
    {
      name: 'sortDefsChildren',
      active: true,
    },
    {
      name: 'removeTitle',
      active: true,
    },
    {
      name: 'removeDesc',
      active: true,
    },
    {
      name: 'removeDimensions',
      active: false,
    },
    {
      name: 'removeStyleElement',
      active: false,
    },
    {
      name: 'removeScriptElement',
      active: false,
    },
  ],
}
