"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    const { id } = req.params;
    const sanityModule = req.scope.resolve("sanity");
    const [sanityDocument] = await sanityModule.list({ id: [id] }, {});
    const url = await sanityModule.getStudioLink(sanityDocument._type, sanityDocument._id, { explicit_type: true });
    res.json({ sanity_document: sanityDocument, studio_url: url });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Nhbml0eS9kb2N1bWVudHMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHTyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDbkUsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFJLEdBQVcsQ0FBQyxNQUFNLENBQUM7SUFFbkMsTUFBTSxZQUFZLEdBQXdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRW5FLE1BQU0sR0FBRyxHQUFHLE1BQU0sWUFBWSxDQUFDLGFBQWEsQ0FDMUMsY0FBYyxDQUFDLEtBQUssRUFDcEIsY0FBYyxDQUFDLEdBQUcsRUFDbEIsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQ3hCLENBQUM7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUM7QUFiVyxRQUFBLEdBQUcsT0FhZCJ9