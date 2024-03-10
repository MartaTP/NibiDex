import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="198px" height="198px" viewBox="0 0 198 198" {...props}>  <image id="image0" width="198" height="198" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWYAAAFmCAMAAABp+MAkAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA9lBMVEUAAACUlP+akvaakfaa kPaZkfeZj/WZkPWZkfeakPaakPeXlPyakPadjveZkfaakfeZkPibk/aZkPaZkfeakPaZkfebj/iY kPmakPeakPeZkPeZj/iWlv+YkPeakfaakfaakPaUlPSakPeZjfKZkfCakfebjv+ZkfeZkfaZkfaa kPeZkPeWkv+akfeii/+akPaZkfaZkfeakfd/f/+ZkfeakPeak/iakff///+akfaakPaZkfaakfaZ k/mZkfaZkfaZkPeakfeakPeZkfeZkPaZkvebkfeakPeZkPaakfaZkPaakfaakfiakfaZkfeZkfea kff///+TXSkJAAAAUHRSTlMACD1584UaU5/6og64ItbhTh7eQPXoKSrnguUkAiDf29gYzxMRzQbM OvPHwwzBC7u0raoEqOsmbAEw+NGcLX6Yj42KgP5nZl78W1pYS/ZDcOdo2dEAAAABYktHRDigB6XW AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH6AMJFzkK+1PXRAAACeVJREFUeNrt3ed2FEcQ hmEJsIkegQnGIMAkmWCTMRhjnHPS/V+NBQKxkmZ3qqur6/uqtt/f2q7Wc+bPnpneWVlhbhW9gaXo wEH0DpahA4c+QG9hCTpwaLMzN29LuTM377VyZ27dG+XO3Lht5c7ctrfKnblp75Q7c8t2lDtzw94r d+Z2zSh35mbNKnfmVu1S7syN2q3cmdu0R7kzN2mvcmdu0T7lztyg/cqd2b4R5c5s3phyZ7ZuVLkz Gzeu3Jltm6PsyvwhGqF585Q9mQ8fQSu0bq6yI/Pho8fQDI2br+zHfPjoZnLmBcpuzFvKyZkXKXsx v1bOzbxQ2Yn5jXJq5sXKPszbypmZJ5RdmN8qJ2aeUvZgfqecl3lS2YF5Rzkt87Rye+b3ylmZBcoT zMer9zCjnJRZojzBfOKjyj3MKudkFilPMA9rdc67lFMyy5SnmDernHcrZ2QWKk8y1zjvUU7ILFWe ZtY771XOxyxWFjBrnfcpp2OWK0uYdc77lbMxFyiLmDXOI8rJmEuUZczlzmPKuZiLlIXMpc6jyqmY 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 OeJkHwAAAABJRU5ErkJggg=="/>
</svg>
  );
};

export default Icon;