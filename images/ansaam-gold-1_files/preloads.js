
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.hI_cYyvC.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CpgHsLpk.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.DNxgwFsB.js","/cdn/shopifycloud/checkout-web/assets/c1/phone-phoneCountryCode.CUvlayIF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts.D4XS1INt.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.C_9SDN8i.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer.CdkJN4OM.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency.CZEOgble.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-shared.V-YSzsq_.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-unactionable-errors.PWr8pEhg.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.Dkru2Axt.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.D627sGtd.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-setAddressErrors.DboSzlZ8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops._y5OunMP.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.CbjepNAQ.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.Dcb0Ib4g.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.Bqu6WftQ.js","/cdn/shopifycloud/checkout-web/assets/c1/CrossBorderConsolidation.BfnB7lDH.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.BaC7hiYl.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.CAfNJSJb.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.CxNCz90_.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.WBwJjnXv.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.h4J1O0Xb.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.B1NR8Rhz.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.Bv3z4SKB.js","/cdn/shopifycloud/checkout-web/assets/c1/ProfilePreviewBar.DO7onHl5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.C674bdDh.js","/cdn/shopifycloud/checkout-web/assets/c1/paypal-express-usePayPalPaymentErrorHandler.DZUFvjZR.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.DYpa76xU.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.Cq22-XZW.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.BqMIbTjC.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.qGEhrYvC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.AQUlz36p.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.Ctn-QMUr.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.De6nMq8I.js","/cdn/shopifycloud/checkout-web/assets/c1/FloatingPayButton.Dnq3InUE.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocation.DvOTnr68.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.bWDOH05o.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.KFjT2DZC.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input.BSSTzFJP.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.BJb0UVXS.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-constants.CgNeLzCx.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.BULDKuwZ.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.C51oMzls.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DuHCdnoY.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.C6Te-wCR.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.BD1J8OSa.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.BYvtLWXg.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.CpXoyfsU.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DVkchx4A.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.BRQAxUoa.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.BuqAfWDl.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.Dwmva2CJ.js","/cdn/shopifycloud/checkout-web/assets/c1/esm-browser-v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.eYX9ZQDa.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.DQm2XSFQ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/phoneCountryCode.Bz45BrAn.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.CO286Meg.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentSessionMutation.CEMlQpma.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.o3WDCM8A.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BVsfwQv1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useGeneralPaymentErrorMessage.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CrossBorderConsolidation.CRDql5Io.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.KuEoN8Dx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.D7YGkQiV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.e2oQyPNV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePayPalPaymentErrorHandler.1xZZnAMV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FloatingPayButton.QTSrLh5I.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ProfilePreviewBar.0LqF4awG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Page.BYM12A8B.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.BSemv9tH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.qDifMJI9.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0754/4936/8799/files/logo_x320.png?v=1746472263"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  