import { NavigationTransitionProps, TransitionConfig } from 'react-navigation'

export const FadeTransitionConfig = (
  transitionProps: NavigationTransitionProps,
): TransitionConfig => {
  const params = transitionProps.scene.route.params || {}
  let animated = true

  if (params.animated !== undefined) {
    animated = params.animated
  }

  return {
    transitionSpec: {
      duration: animated ? 350 : 0,
    },
    screenInterpolator: (sceneProps: NavigationTransitionProps) => {
      const { position, scene } = sceneProps

      const thisSceneIndex = scene.index

      const opacity = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [0, 1],
      })

      return { opacity }
    },
  }
}
