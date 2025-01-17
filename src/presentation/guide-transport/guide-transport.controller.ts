import { Request, Response } from "express";
import { GuideTransportRepository } from "../../domain/repository/guide-transport.repository";
import { GuideTransportDto } from "../../domain/dto/guide-transport.dto";

export class GuideTransportController {
  constructor(
    private readonly guideTransportRepository: GuideTransportRepository
  ) {}

  public save = async (req: Request, res: Response) => {
    try {
      const guideDto = new GuideTransportDto(req.body);
      guideDto.validate();
      const guide = await this.guideTransportRepository.save(guideDto);
      return res.status(200).json(guide);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };

  public delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const guide = await this.guideTransportRepository.delete(Number(id));
      return res.status(200).json(guide);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  };

  public sendNubefact = async (req: Request, res: Response) => {
    try {
      const grt = await this.guideTransportRepository.sendNubefact(req.body);
      return res.status(200).json(grt);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: error });
    }
  };
}
