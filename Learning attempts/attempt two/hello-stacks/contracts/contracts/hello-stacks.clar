(define-non-fungible-token my-nft uint)

(define-public (mint-my-nft (recipient principal) (nft-id uint))
  (nft-mint? my-nft nft-id recipient))