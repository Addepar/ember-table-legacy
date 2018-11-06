export default function getViewById(context, viewId) {
  let viewRegistry = context.get('_viewRegistry');
  return viewRegistry[viewId];
}