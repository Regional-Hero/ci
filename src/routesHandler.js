const path = require('path');

function addPaymentSelectionRoutes(app) {
    app.get(
        '/images/paymentSelection/:filename',
        (req, res) => {
          res.sendFile(path.join(`${__dirname}/../public/images/paymentSelection/${req.params.filename}`));
        },
      );
}

module.exports.addPaymentSelectionRoutes = addPaymentSelectionRoutes;