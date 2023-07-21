import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare const google: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  selectedDate: string = '';
  selectedTimeSlot: string = '';
  selectedEvent: any;

  events: any[] = [
    {
      name: 'The David Copperfield Show',
      description: 'Experience the magic of David Copperfield in this mesmerizing performance.',
      image: 'assets/david-copperfield-show.jpg',
    },
    {
      name: 'The Comedy Night',
      description: 'Laugh out loud with the best comedians in town at our hilarious comedy night.',
      image: 'assets/comedy-night.jpg',
    },
    {
      name: 'Concert Under the Stars',
      description: 'Enjoy an enchanting night of music with live performances from top artists.',
      image: 'assets/concert-under-the-stars.jpg',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.selectedDate = params.get('date') || '';
      this.selectedTimeSlot = params.get('timeSlot') || '';
      const eventName = params.get('eventName');
      this.selectedEvent = eventName ? this.findEventByName(eventName) : null;
    });

    this.loadGooglePayButton();
  }

  findEventByName(eventName: string): any {
    for (const event of this.events) {
      if (event.name === eventName) {
        return event;
      }
    }
    return null;
  }

  loadGooglePayButton() {
    // No need to load the Google Pay button manually as it's handled by the google-pay-button component.
  }

  onGooglePayButtonClicked() {
    const paymentDataRequest = this.getPaymentDataRequest();

    const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

    paymentsClient.loadPaymentData(paymentDataRequest).then((paymentData: any) => {
      // Process the payment data here
      console.log('Payment data:', paymentData);
    }).catch((err: any) => {
      console.error('Error loading payment data:', err);
    });
  }

  getPaymentDataRequest(): any {
    return {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['VISA', 'MASTERCARD'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: 'YOUR_MERCHANT_ID', // Replace with your actual merchant ID
        merchantName: 'Your Merchant Name',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: '123.45',
        currencyCode: 'USD',
      },
    };
  }
}
